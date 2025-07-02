import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-2xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact AVA</h1>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input type="email" required className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Select Service</label>
          <select required className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2">
            <option value="">Choose AVA Plan</option>
            <option value="starter">$59/week – Starter</option>
            <option value="pro">$129/week – Pro</option>
            <option value="godmode">$299/week – Godmode</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Details</label>
          <textarea rows={4} required className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2" />
        </div>

        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
}
