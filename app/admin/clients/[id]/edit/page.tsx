'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/admin/FormComponents/Input';
import Toggle from '@/components/admin/FormComponents/Toggle';
import FileUpload from '@/components/admin/FormComponents/FileUpload';
import Button from '@/components/admin/FormComponents/Button';
import { clientService } from '@/lib/services/clientService';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Allow dynamic routes in static export
export function generateStaticParams() {
  return [];
}

export default function EditClientPage() {
  const router = useRouter();
  const params = useParams();
  const clientId = params.id as string;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    displayOrder: 1,
    isActive: true,
    logo: null as File | null,
    logoPreview: null as string | null,
  });

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await clientService.getById(clientId);
        const client = response.data;
        if (client) {
          setFormData({
            name: client.name,
            displayOrder: client.display_order,
            isActive: client.is_active,
            logo: null,
            logoPreview: `${API_URL}/storage/${client.logo}`,
          });
        }
      } catch (error) {
        console.error('Failed to fetch client:', error);
        alert('Failed to load client data');
      }
    };
    fetchClient();
  }, [clientId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      if (formData.logo) {
        formDataToSend.append('logo', formData.logo);
      }
      formDataToSend.append('display_order', String(formData.displayOrder));
      formDataToSend.append('is_active', formData.isActive ? '1' : '0');

      await clientService.update(clientId, formDataToSend);
      alert('Client updated successfully!');
      router.push('/admin/clients');
    } catch (error) {
      console.error('Failed to update client:', error);
      alert('Failed to update client');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Client</h1>
        <p className="text-gray-500 mt-1">Update client information</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <Input
            label="Client Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter client name"
            required
          />

          <FileUpload
            label="Client Logo"
            name="logo"
            currentImage={formData.logoPreview || undefined}
            onChange={(file, preview) => setFormData({ ...formData, logo: file, logoPreview: preview })}
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
            label="Active"
            name="isActive"
            checked={formData.isActive}
            onChange={(checked) => setFormData({ ...formData, isActive: checked })}
          />

          <div className="flex gap-3 mt-6">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Updating...' : 'Update Client'}
            </Button>
            <Link href="/admin/clients">
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
