import { FormEvent, useState } from "react";
import { ContactForm as IContactForm } from "../../types/types";

type ContactFormProps = {
  onSubmit: (form: IContactForm) => void;
};

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [form, setForm] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div >
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <input type="text"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className=" w-full py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-700">
              email
            </label>
            <input type="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className=" w-full py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <textarea 
            id="name"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-500 transition-colors"
        >
          Send Message
        </button>
        </form>
    </div>
  )
};
