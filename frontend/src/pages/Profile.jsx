import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex justify-center">
      <Tabs defaultValue="overview" className="max-w-5xl mx-auto items-center">
        <TabsList>
          <TabsTrigger value="profile">profile</TabsTrigger>
          <TabsTrigger value="orders">orders</TabsTrigger>
          {/* <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger> */}
        </TabsList>
        <TabsContent value="profile">
          <div>
            <div className="flex flex-col justify-center items-center mt-4 pb-9">
              <h1 className="font-bol mb-7 text-2xl text-red-800 font-bold mt-4">
                Update profile
              </h1>
              <div className="w-full flex gap-10 justify-between items-start px-7 max-w-2xl">
                <div className="flex flex-col items-center">
                  <img
                    src=""
                    alt=""
                    className="w-32 h-32 rounded-full object-cover border-4 border-red-800"
                  />
                  <Label className="mt-4 cursor-pointer bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                    Change Picture
                    <input type="file" accept="image/*" className="hidden" />
                  </Label>
                </div>
                <form className="space-y-4 shadow-lg p-5 rounded-lg bg-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="block text-sm font-medium">
                        First name
                      </Label>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      ></Input>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium">
                        Last name
                      </Label>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="Doe"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      ></Input>
                    </div>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium">Email</Label>
                    <Input
                      type="text"
                      name="email"
                      className="w-full border rounded-lg px-3 py-2 mt-1 cursor-not-allowed "
                    ></Input>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium">
                      Phone number
                    </Label>
                    <Input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    ></Input>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium">
                      Address
                    </Label>
                    <Input
                      type="text"
                      name="address"
                      placeholder="Enter your Address"
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    ></Input>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium">City</Label>
                    <Input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    ></Input>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium">Zip code</Label>
                    <Input
                      type="text"
                      name="zipcode"
                      placeholder="Enter your zip code"
                      className="w-full border rounded-lg px-3 py-2 mt-1"
                    ></Input>
                  </div>
                  <Button type='submit' className="w-full mt-4 bg-orange-600 hover:bg-red-700 font-semibold py-2 rounded-lg text-white">Update Profile</Button>
                </form>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>orders</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends
                and identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        {/* <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default Profile;
