import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
const EmailForm = ({ onReplySaved }) => {

    const MAX_CHARACTERS = 2000;

    const [email, setEmail] = useState("");
    const [tone, setTone] = useState("Select");
    const [generatedReply, setGeneratedReply] = useState("");
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleGenerate = async () => {

        if (!email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (tone === "Select") {
            toast.error("Please select a tone");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/generate-reply`, {
                email: email,
                tone: tone
            });

            console.log("Generated Reply :", response.data);

            setGeneratedReply(response.data.reply);
            setSaved(false);

        } catch (error) {
            console.log(error);
            toast.error("Failed to generate reply");
        } finally {

            setLoading(false);

        }
    }


    const handleSaveReply = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/save-reply`, {
                originalEmail: email,
                generatedReply: generatedReply,
                tone: tone
            });

            console.log("Save Reply Response :", response.data);

            toast.success("Reply saved successfully");
            setSaved(true);
            onReplySaved();

        } catch (error) {
            console.log(error);
            toast.error("Failed to save reply")
        }
    }


    return (
        <>
            <div className="container mt-5">

                <h1 className="text-center mb-2">
                    AI Email Reply Generator
                </h1>

                <p className="text-center text-muted mb-4">
                    Generate professional, casual or friendly email replies using AI.
                </p>

                <div className="card shadow-sm p-4">

                    <div className="mb-3">
                        <label htmlFor="eml" className="form-label">
                            Email
                        </label>

                        <textarea
                            className="form-control"
                            rows="7"
                            id="eml"
                            placeholder="Paste the email you received..."
                            value={email}
                            maxLength={MAX_CHARACTERS}
                            onChange={(e) => setEmail(e.target.value)}
                        ></textarea>

                        <div className="text-end text-muted small mt-1">
                            {email.length} / {MAX_CHARACTERS} characters
                        </div>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="tone" className="form-label">
                            Select Tone
                        </label>

                        <select
                            className="form-select"
                            id="tone"
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                        >
                            <option value="Select" disabled>Select</option>
                            <option value="professional">Professional</option>
                            <option value="casual">Casual</option>
                            <option value="friendly">Friendly</option>
                        </select>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={handleGenerate}
                        disabled={loading}
                    >
                        {loading ? "Generating..." : "Generate Reply"}
                    </button>


                    {generatedReply && (
                        <div className="mt-4">

                            <label className="form-label">
                                Generated Reply
                            </label>

                            <textarea
                                className="form-control"
                                rows="7"
                                value={generatedReply}
                                onChange={(e) => setGeneratedReply(e.target.value)}
                            ></textarea>


                            <button
                                className="btn btn-warning mt-3 me-2"
                                onClick={handleGenerate}
                                disabled={loading}
                            >
                                {loading ? "Regenerating..." : "Regenerate Reply"}
                            </button>


                            <button
                                className="btn btn-success mt-3"
                                onClick={handleSaveReply}
                                disabled={saved}
                            >
                                {saved ? "Saved ✓" : "Save Reply"}
                            </button>

                        </div>
                    )}
                </div>

            </div>
        </>
    )
}
export default EmailForm;