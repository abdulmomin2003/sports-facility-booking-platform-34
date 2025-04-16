
import React, { useState } from 'react';
import { User, Mail, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditProfileDialog from './EditProfileDialog';

interface ProfileViewProps {
  user: {
    _id: string;
    fullName: string;
    email: string;
    role: string;
  };
}

const ProfileView = ({ user }: ProfileViewProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
            <User className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.fullName}</h2>
            <p className="text-gray-500">{user.role}</p>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Key className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p className="font-medium">••••••••</p>
            </div>
          </div>
        </div>

        <Button 
          onClick={() => setIsEditing(true)}
          className="w-full mt-6"
        >
          Edit Profile
        </Button>
      </div>

      <EditProfileDialog
        user={user}
        open={isEditing}
        onOpenChange={setIsEditing}
      />
    </div>
  );
};

export default ProfileView;
