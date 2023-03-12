import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from 'react';
import Loader from "../../components/Loader";

export default function signin({ providers },) {
  const router = useRouter();
  const { data: session } = useSession()
  console.log('not in', session)
  
  useEffect(() => {
    console.log('in useEffect', session)
    if (session) {
      console.log(session)
      router.push("/");
    }
  }, [session]);
  

  if (session) return <Loader />;

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://res.cloudinary.com/dirvusyaz/image/upload/v1677586901/spotify2019-830x350_varrpt.jpg"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

// export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
