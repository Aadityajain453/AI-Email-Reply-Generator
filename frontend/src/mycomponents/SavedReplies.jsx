import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const SavedReplies = ({ refreshReplies }) => {


    const [replies, setReplies] = useState([]);

    useEffect(() => {
        fetchReplies();
    }, [refreshReplies])


    const fetchReplies = async () => {
        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/replies`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log("Saved Replies:", response.data);

            setReplies(response.data.replies);

        } catch (error) {

            console.log("Fetch Replies Error:", error);

            toast.error(
                error.response?.data?.message || "Failed to fetch saved replies"
            );
        }
    };


    const handleCopy = async (reply) => {

        try {

            await navigator.clipboard.writeText(reply.generatedReply);

            toast.success("Reply copied to clipboard");

        } catch (error) {

            console.log("Copy Error:", error);

            toast.error("Failed to copy reply");

        }
    };

    return (
        <>
            <div className="container mt-5">

                <h2 className="mb-4">
                    Saved Replies
                </h2>

                <div className="card shadow-sm p-4">

                    {replies.length === 0 ? (

                        <p className="text-muted mb-0">
                            No saved replies yet. Generate and save a reply to see it here.
                        </p>

                    ) : (

                        replies.map((reply) => (

                            <div key={reply._id} className="border rounded p-3 mb-3">

                                <h5>
                                    {reply.tone.charAt(0).toUpperCase() + reply.tone.slice(1)}
                                </h5>

                                <p className="text-muted small">
                                    Saved: {new Date(reply.createdAt).toLocaleString()}
                                </p>

                                <p>
                                    <strong>Original Email:</strong>
                                </p>

                                <p>
                                    {reply.originalEmail}
                                </p>

                                <p>
                                    <strong>Generated Reply:</strong>
                                </p>

                                <p>
                                    {reply.generatedReply}
                                </p>

                                <button className="btn btn-outline-primary btn-sm" onClick={() => handleCopy(reply)}>
                                    Copy Reply
                                </button>

                            </div>

                        ))

                    )}
                </div>

            </div>
        </>
    )
}
export default SavedReplies;