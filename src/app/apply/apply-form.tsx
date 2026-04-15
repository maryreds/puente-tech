"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Upload,
  X,
  CheckCircle,
  User,
  FileText,
  GraduationCap,
  Camera,
  Phone,
  Mail,
  Loader2,
} from "lucide-react";
import { getSupabase } from "@/lib/supabase";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: File | null;
  resume: File | null;
  diploma: File | null;
};

const STEPS = [
  { id: "info", label: "Your Info", icon: User },
  { id: "photo", label: "Photo", icon: Camera },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "diploma", label: "Diploma", icon: GraduationCap },
] as const;

function FileDropzone({
  label,
  accept,
  file,
  onDrop,
  onRemove,
  hint,
}: {
  label: string;
  accept: Record<string, string[]>;
  file: File | null;
  onDrop: (files: File[]) => void;
  onRemove: () => void;
  hint: string;
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  });

  if (file) {
    return (
      <div className="border border-[#22c55e]/30 bg-[#22c55e]/5 rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
          <div>
            <p className="font-medium text-sm">{file.name}</p>
            <p className="text-xs text-gray-medium">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="text-gray-medium hover:text-red-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
        isDragActive
          ? "border-[#22c55e] bg-[#22c55e]/5"
          : "border-gray-border hover:border-[#22c55e]/50"
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="w-10 h-10 text-gray-medium mx-auto mb-3" />
      <p className="font-medium mb-1">{label}</p>
      <p className="text-sm text-gray-medium">{hint}</p>
    </div>
  );
}

function PhotoUpload({
  file,
  onDrop,
  onRemove,
}: {
  file: File | null;
  onDrop: (files: File[]) => void;
  onRemove: () => void;
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp"] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
  });

  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        {...getRootProps()}
        className={`relative w-40 h-40 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition-colors overflow-hidden ${
          isDragActive
            ? "border-[#22c55e] bg-[#22c55e]/5"
            : file
            ? "border-[#22c55e]"
            : "border-gray-border hover:border-[#22c55e]/50"
        }`}
      >
        <input {...getInputProps()} />
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <Camera className="w-8 h-8 text-gray-medium mx-auto mb-1" />
            <p className="text-xs text-gray-medium">Upload photo</p>
          </div>
        )}
      </div>
      {file && (
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#22c55e]" />
          <span className="text-sm">{file.name}</span>
          <button
            type="button"
            onClick={onRemove}
            className="text-gray-medium hover:text-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <p className="text-sm text-gray-medium">
        JPG, PNG or WebP. Max 5 MB.
      </p>
    </div>
  );
}

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    photo: null,
    resume: null,
    diploma: null,
  });

  const updateField = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const canProceed = () => {
    switch (step) {
      case 0:
        return (
          formData.firstName.trim() &&
          formData.lastName.trim() &&
          formData.email.trim() &&
          formData.phone.trim()
        );
      case 1:
        return formData.photo !== null;
      case 2:
        return formData.resume !== null;
      case 3:
        return formData.diploma !== null;
      default:
        return false;
    }
  };

  async function uploadFile(file: File, bucket: string, path: string) {
    const supabase = getSupabase();
    const { error } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (error) throw error;
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucket).getPublicUrl(path);
    return publicUrl;
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);

    try {
      const timestamp = Date.now();
      const slug = `${formData.firstName}-${formData.lastName}-${timestamp}`
        .toLowerCase()
        .replace(/\s+/g, "-");

      const [photoUrl, resumeUrl, diplomaUrl] = await Promise.all([
        uploadFile(formData.photo!, "photos", `${slug}/photo${getExt(formData.photo!)}`),
        uploadFile(formData.resume!, "resumes", `${slug}/resume${getExt(formData.resume!)}`),
        uploadFile(formData.diploma!, "diplomas", `${slug}/diploma${getExt(formData.diploma!)}`),
      ]);

      const supabase = getSupabase();
      const { error: dbError } = await supabase.from("profiles").insert({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        photo_url: photoUrl,
        resume_url: resumeUrl,
        diploma_url: diplomaUrl,
      });

      if (dbError) throw dbError;
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-border rounded-2xl p-12 text-center shadow-sm">
        <CheckCircle className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Profile created!</h2>
        <p className="text-gray-medium max-w-sm mx-auto">
          Your profile has been submitted successfully. We will review your
          documents and get back to you with matching opportunities.
        </p>
        <a
          href="/empleos"
          className="inline-block mt-6 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-medium rounded-full px-8 py-3 transition-colors"
        >
          Browse Jobs
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex gap-2 mb-8">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === step;
          const isDone = i < step;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                if (i < step) setStep(i);
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#22c55e] text-white"
                  : isDone
                  ? "bg-[#22c55e]/10 text-[#16a34a] cursor-pointer"
                  : "bg-white border border-gray-border text-gray-medium cursor-default"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-gray-border rounded-2xl p-8 shadow-sm">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Step 0: Contact info */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    placeholder="Your first name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-border focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 focus:border-[#22c55e] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    placeholder="Your last name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-border focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 focus:border-[#22c55e] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-border focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 focus:border-[#22c55e] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-border focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 focus:border-[#22c55e] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 1: Photo */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
              <p className="text-gray-medium text-sm mb-4">
                Upload a clear, professional photo of yourself.
              </p>
              <PhotoUpload
                file={formData.photo}
                onDrop={(files) => updateField("photo", files[0])}
                onRemove={() => updateField("photo", null)}
              />
            </div>
          )}

          {/* Step 2: Resume */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">Resume / CV</h2>
              <p className="text-gray-medium text-sm mb-4">
                Upload your most recent resume or CV.
              </p>
              <FileDropzone
                label="Drop your resume here, or click to browse"
                accept={{
                  "application/pdf": [".pdf"],
                  "application/msword": [".doc"],
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    [".docx"],
                }}
                file={formData.resume}
                onDrop={(files) => updateField("resume", files[0])}
                onRemove={() => updateField("resume", null)}
                hint="PDF, DOC, or DOCX. Max 10 MB."
              />
            </div>
          )}

          {/* Step 3: Diploma */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">
                Diploma / Certificate
              </h2>
              <p className="text-gray-medium text-sm mb-4">
                Upload a scan or photo of your diploma, degree, or relevant
                certificate.
              </p>
              <FileDropzone
                label="Drop your diploma here, or click to browse"
                accept={{
                  "application/pdf": [".pdf"],
                  "image/*": [".jpg", ".jpeg", ".png"],
                }}
                file={formData.diploma}
                onDrop={(files) => updateField("diploma", files[0])}
                onRemove={() => updateField("diploma", null)}
                hint="PDF, JPG, or PNG. Max 10 MB."
              />
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors border border-gray-border hover:bg-gray-light text-sm ${
                step === 0 ? "invisible" : ""
              }`}
            >
              Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className="bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {submitting ? "Submitting..." : "Submit Profile"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function getExt(file: File): string {
  const name = file.name;
  const dot = name.lastIndexOf(".");
  return dot >= 0 ? name.slice(dot) : "";
}
