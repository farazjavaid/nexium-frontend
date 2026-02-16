'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/admin/FormComponents/Input';
import Textarea from '@/components/admin/FormComponents/Textarea';
import Toggle from '@/components/admin/FormComponents/Toggle';
import Button from '@/components/admin/FormComponents/Button';
import { testimonialService } from '@/lib/services/testimonialService';

// Allow dynamic routes in static export
export function generateStaticParams() {
  return [];
}

export default function EditTestimonialPage() {
  const router = useRouter();
  const params = useParams();
  const testimonialId = params.id as string;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    title: '',
    displayOrder: 1,
    isActive: true,
  });

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await testimonialService.getById(testimonialId);
        const testimonial = response.data;
        if (testimonial) {
          setFormData({
            quote: testimonial.quote,
            author: testimonial.author,
            title: testimonial.title,
            displayOrder: testimonial.display_order,
            isActive: testimonial.is_active,
          });
        }
      } catch (error) {
        console.error('Failed to fetch testimonial:', error);
        alert('Failed to load testimonial data');
      }
    };
    fetchTestimonial();
  }, [testimonialId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await testimonialService.update(testimonialId, {
        quote: formData.quote,
        author: formData.author,
        title: formData.title,
        display_order: formData.displayOrder,
        is_active: formData.isActive,
      });
      alert('Testimonial updated successfully!');
      router.push('/admin/testimonials');
    } catch (error: any) {
      console.error('Failed to update testimonial:', error);

      if (error?.message) {
        alert('Error: ' + error.message);
      } else if (error?.errors) {
        const errorMessages = Object.values(error.errors).flat().join('\n');
        alert('Validation Error:\n' + errorMessages);
      } else {
        alert('Failed to update testimonial. Please check your input.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Testimonial</h1>
        <p className="text-gray-500 mt-1">Update testimonial information</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <Textarea
            label="Testimonial Quote"
            name="quote"
            value={formData.quote}
            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
            placeholder="Enter the testimonial text..."
            rows={5}
            required
          />

          <Input
            label="Author Name"
            name="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            placeholder="e.g., John Smith"
            required
          />

          <Input
            label="Job Title / Company"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., CEO at TechCorp"
            required
          />

          <Input
            label="Display Order"
            name="displayOrder"
            type="number"
            value={formData.displayOrder}
            onChange={(e) => setFormData({ ...formData, displayOrder: Number(e.target.value) })}
            placeholder="Enter display order (1, 2, 3...)"
            required
          />

          <Toggle
            label="Active Status"
            name="isActive"
            checked={formData.isActive}
            onChange={(checked) => setFormData({ ...formData, isActive: checked })}
          />

          <div className="flex gap-3 mt-6">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Updating...' : 'Update Testimonial'}
            </Button>
            <Link href="/admin/testimonials">
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
