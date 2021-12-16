import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import LoginForm from "../components/Login-form";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title> WesternUnion//WU </title>
            </Head>
            <LoginForm />
        </div>
    );
};

export default Home;
