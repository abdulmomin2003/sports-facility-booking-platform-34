
import { useState } from "react";
import { AdminSidebarWrapper } from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  Banknote,
  Cloud,
  Mail,
  MessageSquare,
  Save,
  Settings2,
} from "lucide-react";

const SystemSettings = () => {
  const { toast } = useToast();
  
  // General settings
  const [siteName, setSiteName] = useState("Sports Space");
  const [siteDescription, setSiteDescription] = useState("Book sports facilities online");
  const [contactEmail, setContactEmail] = useState("admin@sportsspace.com");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  
  // Email settings
  const [smtpHost, setSmtpHost] = useState("smtp.example.com");
  const [smtpPort, setSmtpPort] = useState("587");
  const [smtpUser, setSmtpUser] = useState("notifications@sportsspace.com");
  const [smtpPass, setSmtpPass] = useState("********");
  
  // Notification settings
  const [enableEmailNotifications, setEnableEmailNotifications] = useState(true);
  const [enablePushNotifications, setEnablePushNotifications] = useState(false);
  const [notifyOnNewBooking, setNotifyOnNewBooking] = useState(true);
  const [notifyOnNewUser, setNotifyOnNewUser] = useState(true);
  
  // Payment settings
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [platformFee, setPlatformFee] = useState("10");
  const [payoutsEnabled, setPayoutsEnabled] = useState(true);
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleResetSettings = () => {
    // In a real app, this would reset to defaults from backend
    toast({
      title: "Settings reset",
      description: "All settings have been reset to default values.",
    });
  };

  const handleTestEmail = () => {
    toast({
      title: "Test email sent",
      description: "A test email has been sent to your account.",
    });
  };

  return (
    <AdminSidebarWrapper>
      <div className="container py-6 space-y-6">
        <AdminHeader
          title="System Settings"
          description="Configure and manage platform settings."
        />

        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5" /> General Settings
                </CardTitle>
                <CardDescription>
                  Configure basic information about your platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea
                    id="site-description"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Switch
                    id="maintenance-mode"
                    checked={maintenanceMode}
                    onCheckedChange={setMaintenanceMode}
                  />
                  <div className="grid gap-1.5">
                    <Label htmlFor="maintenance-mode" className="font-medium">
                      Maintenance Mode
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Enable this to put the site in maintenance mode. Only admins will have access.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleResetSettings}>
                  Reset
                </Button>
                <Button onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" /> Email Configuration
                </CardTitle>
                <CardDescription>
                  Configure the email server settings for your platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input
                    id="smtp-host"
                    value={smtpHost}
                    onChange={(e) => setSmtpHost(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input
                    id="smtp-port"
                    value={smtpPort}
                    onChange={(e) => setSmtpPort(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="smtp-user">SMTP Username</Label>
                  <Input
                    id="smtp-user"
                    value={smtpUser}
                    onChange={(e) => setSmtpUser(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="smtp-pass">SMTP Password</Label>
                  <Input
                    id="smtp-pass"
                    type="password"
                    value={smtpPass}
                    onChange={(e) => setSmtpPass(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Switch
                    id="use-ssl"
                    checked={true}
                    onCheckedChange={() => {}}
                  />
                  <Label htmlFor="use-ssl">Use SSL/TLS</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleTestEmail}>
                  Send Test Email
                </Button>
                <Button onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Notification Settings
                </CardTitle>
                <CardDescription>
                  Configure notification preferences for the platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable email notifications for system events
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={enableEmailNotifications}
                      onCheckedChange={setEnableEmailNotifications}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable browser push notifications
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={enablePushNotifications}
                      onCheckedChange={setEnablePushNotifications}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-4">
                  <h3 className="text-sm font-medium">Notification Events</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-booking">New Booking</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify when a new booking is made
                      </p>
                    </div>
                    <Switch
                      id="notify-booking"
                      checked={notifyOnNewBooking}
                      onCheckedChange={setNotifyOnNewBooking}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-user">New User Registration</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify when a new user registers
                      </p>
                    </div>
                    <Switch
                      id="notify-user"
                      checked={notifyOnNewUser}
                      onCheckedChange={setNotifyOnNewUser}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveSettings} className="ml-auto">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Banknote className="h-5 w-5" /> Payment Settings
                </CardTitle>
                <CardDescription>
                  Configure payment and currency settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency-symbol">Currency Symbol</Label>
                    <Input
                      id="currency-symbol"
                      value={currencySymbol}
                      onChange={(e) => setCurrencySymbol(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency-code">Currency Code</Label>
                    <Input
                      id="currency-code"
                      value={currencyCode}
                      onChange={(e) => setCurrencyCode(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="platform-fee">Platform Fee (%)</Label>
                  <Input
                    id="platform-fee"
                    type="number"
                    min="0"
                    max="100"
                    value={platformFee}
                    onChange={(e) => setPlatformFee(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Switch
                    id="payouts-enabled"
                    checked={payoutsEnabled}
                    onCheckedChange={setPayoutsEnabled}
                  />
                  <div className="grid gap-1.5">
                    <Label htmlFor="payouts-enabled" className="font-medium">
                      Enable Automatic Payouts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      When enabled, facility owners receive automatic payouts for completed bookings.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 rounded-md border-l-4 border-yellow-400 bg-yellow-50 text-yellow-800">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Important Note</h3>
                      <p className="text-sm">
                        Changing payment settings may affect ongoing transactions. It's recommended to make these changes during off-peak hours.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleResetSettings}>
                  Reset
                </Button>
                <Button onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminSidebarWrapper>
  );
};

export default SystemSettings;
