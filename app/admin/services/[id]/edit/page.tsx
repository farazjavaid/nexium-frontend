'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/admin/FormComponents/Input';
import Textarea from '@/components/admin/FormComponents/Textarea';
import Button from '@/components/admin/FormComponents/Button';
import { serviceService } from '@/lib/services/serviceService';

// Allow dynamic routes in static export
export function generateStaticParams() {
  return [];
}

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params.id as string;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    displayOrder: 1,
    items: [''],
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await serviceService.getById(serviceId);
        const service = response.data;
        if (service) {
          const itemTexts = service.items && service.items.length > 0
            ? service.items.map(item => item.item_text)
            : [''];
          setFormData({
            title: service.title,
            description: service.description,
            displayOrder: service.display_order,
            items: itemTexts,
          });
        }
      } catch (error) {
        console.error('Failed to fetch service:', error);
        alert('Failed to load service data');
      }
    };
    fetchService();
  }, [serviceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validItems = formData.items.filter((item) => item.trim() !== '');

    if (validItems.length === 0) {
      alert('Please add at least one feature/item');
      return;
    }

    setLoading(true);

    try {
      await serviceService.update(serviceId, {
        title: formData.title,
        description: formData.description,
        display_order: formData.displayOrder,
        items: validItems,
      });
      alert('Service updated successfully!');
      router.push('/admin/services');
    } catch (error: any) {
      console.error('Failed to update service:', error);

      if (error?.message) {
        alert('Error: ' + error.message);
      } else if (error?.errors) {
        const errorMessages = Object.values(error.errors).flat().join('\n');
        alert('Validation Error:\n' + errorMessages);
      } else {
        alert('Failed to update service. Please check your input.');
      }
    } finally {
      setLoading(false);
    }
  };

  const addItem = () => {
    setFormData({ ...formData, items: [...formData.items, ''] });
  };

  const removeItem = (index: number) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const updateItem = (index: number, value: string) => {
    const newItems = [...formData.items];
    newItems[index] = value;
    setFormData({ ...formData, items: newItems });
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Service</h1>
        <p className="text-gray-500 mt-1">Update service information</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <Input
            label="Service Title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., WordPress Development"
            required
          />

          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter service description"
            rows={3}
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features / Items
              <span className="text-red-500 ml-1">*</span>
            </label>

            <div className="space-y-3">
              {formData.items.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateItem(index, e.target.value)}
                    placeholder={`Feature ${index + 1}`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#267275] text-gray-900 placeholder-gray-400 bg-white"
                  />
                  {formData.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addItem}
              className="mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium"
            >
              + Add Another Feature
            </button>
          </div>

          <div className="flex gap-3 mt-6">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Updating...' : 'Update Service'}
            </Button>
            <Link href="/admin/services">
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
