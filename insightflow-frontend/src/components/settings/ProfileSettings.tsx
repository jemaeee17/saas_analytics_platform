import { User, Mail, Shield, Camera, Lock } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { profileService }
    from "../../services/profile.service";

import toast from "react-hot-toast";

export default function ProfileSettings() {
    const { user, setUser } = useAuth();

    const [avatar, setAvatar] =
        useState<string | null>(null);

    const [photo, setPhoto] =
        useState<File | null>(null);

    const [currentPassword, setCurrentPassword] =
        useState("");

    const [newPassword, setNewPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [saving, setSaving] =
        useState(false);
    const [name, setName] =
        useState(user?.name || "");

    const [email, setEmail] =
        useState(user?.email || "");

    useEffect(() => {

        if (user) {

            setName(user.name);
            setEmail(user.email);

        }

    }, [user]);

    const handleSave = async () => {

        if (newPassword) {

            if (newPassword.length < 8) {

                toast.error("New password must be at least 8 characters.");

                return;
            }

            if (newPassword !== confirmPassword) {

                toast.error("Passwords do not match.");

                return;
            }

        }

        try {

            setSaving(true);

            const formData =
                new FormData();

            formData.append(
                "name",
                name
            );

            formData.append(
                "email",
                email
            );

            if (photo) {

                formData.append(
                    "photo",
                    photo
                );

            }

            const response =
                await profileService
                    .updateProfile(
                        formData
                    );

            setUser(
                response.user
            );

            if (newPassword) {

                await profileService
                    .updatePassword({
                        current_password:
                            currentPassword,
                        password:
                            newPassword,
                        password_confirmation:
                            confirmPassword,
                    });

            }

            toast.success("Profile updated successfully");

        } catch (error) {

            console.error(error);

            toast.error("Failed to update profile");

        } finally {

            setSaving(false);

        }
    };

    const hasChanges =
        name !== user?.name ||
        email !== user?.email ||
        photo !== null;

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="mb-8 flex items-center gap-4">
                <div className="relative">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt="Profile"
                            className="h-20 w-20 rounded-2xl object-cover shadow"
                        />
                    ) : (
                        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl font-bold text-white shadow">
                            {user?.profile_photo ? (
                                <img
                                    src={`http://localhost:8000/storage/${user.profile_photo}`}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                user?.name?.charAt(0)
                            )}
                        </div>
                    )}

                    <label
                        className="
                        absolute -bottom-2 -right-2
                        flex h-8 w-8 cursor-pointer
                        items-center justify-center
                        rounded-full
                        border border-slate-700
                        bg-slate-800
                        text-slate-300
                        shadow
                    "
                    >
                        <Camera size={16} />

                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (!file) return;

                                setPhoto(file);
                                setAvatar(URL.createObjectURL(file));
                            }}
                        />
                    </label>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-100">
                        Profile Settings
                    </h2>

                    <p className="text-sm text-slate-400">
                        Manage your account information
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                        <User size={16} />
                        Full Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="
                        w-full rounded-xl
                        border border-slate-700
                        bg-slate-800
                        px-4 py-3
                        text-slate-100
                        placeholder:text-slate-500
                        transition
                        focus:border-blue-500
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-500/20
                    "
                    />
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                        <Mail size={16} />
                        Email Address
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="
                        w-full rounded-xl
                        border border-slate-700
                        bg-slate-800
                        px-4 py-3
                        text-slate-100
                        placeholder:text-slate-500
                        transition
                        focus:border-blue-500
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-500/20
                    "
                    />
                </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                <div className="mb-5 flex items-center gap-2">
                    <Lock
                        size={18}
                        className="text-blue-400"
                    />

                    <h3 className="font-semibold text-slate-100">
                        Change Password
                    </h3>
                </div>

                <div className="space-y-4">
                    <input
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) =>
                            setCurrentPassword(e.target.value)
                        }
                        className="
                        w-full rounded-xl
                        border border-slate-700
                        bg-slate-800
                        px-4 py-3
                        text-slate-100
                        placeholder:text-slate-500
                        focus:border-blue-500
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-500/20
                    "
                    />

                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) =>
                            setNewPassword(e.target.value)
                        }
                        className="
                        w-full rounded-xl
                        border border-slate-700
                        bg-slate-800
                        px-4 py-3
                        text-slate-100
                        placeholder:text-slate-500
                        focus:border-blue-500
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-500/20
                    "
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        className="
                        w-full rounded-xl
                        border border-slate-700
                        bg-slate-800
                        px-4 py-3
                        text-slate-100
                        placeholder:text-slate-500
                        focus:border-blue-500
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-500/20
                    "
                    />
                </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                <div className="flex items-center gap-2">
                    <Shield
                        size={18}
                        className="text-green-400"
                    />

                    <span className="font-medium text-slate-200">
                        Account Status
                    </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                    Your account is active and authenticated using Laravel Sanctum.
                </p>
            </div>

            <div className="mt-8 flex justify-end">
                <button
                    disabled={!hasChanges && !newPassword}
                    onClick={handleSave}
                    className="
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    px-6 py-3
                    font-medium
                    text-white
                    shadow-lg
                    transition
                    hover:from-blue-500
                    hover:to-indigo-500
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
                >
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}