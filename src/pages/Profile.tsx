
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ProfileView from '@/components/profile/ProfileView';
import { Card } from '@/components/ui/card';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 pt-24">
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <Card className="max-w-2xl mx-auto p-6">
        <ProfileView user={user} />
      </Card>
    </div>
  );
};

export default Profile;
