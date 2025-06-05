import React, { useState } from "react";

interface PlanModalProps {
  open: boolean;
  onClose: () => void;
}

const defaultForm = {
  destination: "",
  days: 5,
  companions: "",
  budget: "",
  interests: "",
};

const PlanModal: React.FC<PlanModalProps> = ({ open, onClose }) => {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setError(null);
    setAiResult(null);
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.result) {
        setAiResult(data.result);
      } else {
        setError(data.error || "AI did not return a valid result.");
      }
    } catch {
      setError("Failed to fetch AI itinerary.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setLoading(false);
    setAiResult(null);
    setError(null);
    setForm(defaultForm);
    onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Travel Requirements</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g. Barcelona"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Days
              </label>
              <input
                type="number"
                name="days"
                value={form.days}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                min={1}
                max={30}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Companions
              </label>
              <input
                type="text"
                name="companions"
                value={form.companions}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g. 2 seniors, 1 child"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Budget</label>
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g. $2000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Interests & Preferences
              </label>
              <textarea
                name="interests"
                value={form.interests}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g. Food, history, need accessibility facilities"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 rounded mt-2 hover:from-orange-600 hover:to-orange-700"
            >
              Submit
            </button>
          </form>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
            <div className="text-lg font-semibold text-gray-700">
              AI is generating your itinerary...
            </div>
          </div>
        ) : aiResult ? (
          <div className="space-y-4">
            <div className="text-green-600 font-bold text-lg">
              Your AI-Powered Itinerary
            </div>
            <div
              className="prose max-w-none bg-gray-50 rounded p-4 overflow-x-auto"
              style={{ whiteSpace: "pre-wrap" }}
            >
              <MarkdownRenderer markdown={aiResult} />
            </div>
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="text-red-600 font-bold text-lg">{error}</div>
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

// MarkdownRenderer: 使用react-markdown渲染AI返回的markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownRenderer({ markdown }: { markdown: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}

export default PlanModal;
