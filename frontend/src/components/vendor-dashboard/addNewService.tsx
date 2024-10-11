// components/AddServicePopup.tsx
"use-client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../ui/button"; 
import { Input } from "../ui/input";

interface AddServicePopupProps {
  onClose: () => void;
}

const AddNewService: React.FC<AddServicePopupProps> = ({ onClose }) => {
  const [category, setCategory] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");
  const router = useRouter();

  const handleSubmit = () => {
    if (category && serviceName) {
      // After submission, redirect to the details page with query params
      router.push({
        pathname: "/vendor-dashboard/services",
        query: { category, serviceName },
      });
      onClose();
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Add New Service</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Service Name
          </label>
          <Input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={serviceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setServiceName(e.target.value)}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} className="bg-gray-300">Cancel</Button>
          <Button onClick={handleSubmit} className="bg-blue-500 text-white">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
