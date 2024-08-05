import Header from "@components/header";
import { Identity } from "@dfinity/agent";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useAuth, useRestActor } from "@bundly/ares-react";

type Profile = {
    id: number;
    principal: string;
    username: string;
    bio: string;
};

export default function IcConnectPage() {
    return (
        <>
            <Header />
            <main className="p-6">
                <h1 className="text-2xl text-center">Build Fullstack dApps with Azle and Ares</h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">User Info</h2>
                            <p className="mt-4 text-sm text-gray-500">
                                <strong>Status:</strong>
                            </p>
                            <p className="text-gray-700">
                                <strong>Principal ID:</strong>
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">REST API Info</h2>
                            <p className="mt-4 text-sm text-gray-500">
                                <strong>Status:</strong>
                            </p>
                            <p className="text-gray-700"></p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl text-center">Interacts with Azle REST API</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">Profile form</h2>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">Profile data</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

type CreateProfileResponse = {
    id: number;
    principal: string;
    username: string;
    bio: string;
};

type ProfileFormProps = {
    identity: Identity;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    onProfileCreated: (profile: CreateProfileResponse) => void;
};

function ProfileForm(props: ProfileFormProps): JSX.Element {
    return (
        <></>
    );
}