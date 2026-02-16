'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/admin/FormComponents/Input';
import Textarea from '@/components/admin/FormComponents/Textarea';
import FileUpload from '@/components/admin/FormComponents/FileUpload';
import ColorPicker from '@/components/admin/FormComponents/ColorPicker';
import Button from '@/components/admin/FormComponents/Button';
import { projectService } from '@/lib/services/projectService';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Allow dynamic routes in static export
export function generateStaticParams() {
  return [];
}

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    link: '',
    bgColor: '#267275',
    image: null as File | null,
    imagePreview: null as string | null,
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectService.getById(projectId);
        const project = response.data;
        if (project) {
          setFormData({
            title: project.title,
            category: project.category,
            description: project.description || '',
            link: project.link || '',
            bgColor: project.bg_color,
            image: null,
            imagePreview: `${API_URL}/storage/${project.image}`,
          });
        }
      } catch (error) {
        console.error('Failed to fetch project:', error);
        alert('Failed to load project data');
      }
    };
    fetchProject();
  }, [projectId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      formDataToSend.append('bg_color', formData.bgColor);
      formDataToSend.append('link', formData.link);

      await projectService.update(projectId, formDataToSend);
      alert('Project updated successfully!');
      router.push('/admin/projects');
    } catch (error) {
      console.error('Failed to update project:', error);
      alert('Failed to update project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Project</h1>
        <p className="text-gray-500 mt-1">Update project information</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <Input
            label="Project Title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter project title"
            required
          />

          <Input
            label="Category"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="e.g., WordPress Development, Shopify Development"
            required
          />

          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter project description"
            rows={4}
          />

          <FileUpload
            label="Project Image"
            name="image"
            currentImage={formData.imagePreview || undefined}
            onChange={(file, preview) => setFormData({ ...formData, image: file, imagePreview: preview })}
          />

          <ColorPicker
            label="Background Color"
            name="bgColor"
            value={formData.bgColor}
            onChange={(color) => setFormData({ ...formData, bgColor: color })}
            required
          />

          <Input
            label="Project Link (Optional)"
            name="link"
            type="url"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            placeholder="https://example.com"
          />

          <div className="flex gap-3 mt-6">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Updating...' : 'Update Project'}
            </Button>
            <Link href="/admin/projects">
              <Button variant="secondary">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
