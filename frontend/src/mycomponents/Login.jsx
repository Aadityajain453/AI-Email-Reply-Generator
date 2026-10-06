import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!password.trim()) {
            toast.error("Password is required");
            return;
        }

        setLoading(true);

        try {

            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/login`,
                {
                    email,
                    password
                }
            );

            console.log("Login Response:", response.data);

            // Save JWT token
            localStorage.setItem("token", response.data.token);

            toast.success("Login successful");

            navigate("/email-generator");   

        } catch (error) {

            console.log("Login Error:", error);

            toast.error(
                error.response?.data?.message || "Login failed"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow-sm p-4">

                        <h2 className="text-center mb-4">
                            Login
                        </h2>

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">

                                <label
                                    htmlFor="email"
                                    className="form-label"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;