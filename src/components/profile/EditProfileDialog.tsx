
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface EditProfileDialogProps {
  user: {
    _id: string;
    fullName: string;
    email: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const EditProfileDialog = ({ user, open, onOpenChange }: EditProfileDialogProps) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically call your API to update the user profile
      console.log('Update profile with:', data);
      toast.success('Profile updated successfully');
      onOpenChange(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              {...register('fullName', { required: 'Full name is required' })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">New Password (optional)</Label>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="Leave blank to keep current password"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword', {
                validate: (value) => 
                  !watch('password') || value === watch('password') || 
                  'Passwords do not match'
              })}
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
