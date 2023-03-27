import React from "react";
import axios from "axios";
import { PlusSquare } from "@phosphor-icons/react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import CreateCard from "../Card/CreateCard";
import History from "../History/History";
import { useCovinStore } from "../../store/useStore";
import { useBucketQuery, useCreateBucket } from "../../hooks/useCovinQuery";
import Loader from "../Loader/Loader";

const Bucket = () => {
  const [bucketName, setBucketName] = useState("");

  const { mutate:createBucket } = useCreateBucket();
  const { data: bucket, isLoading } = useBucketQuery();
  if (isLoading) return <Loader />;

  const handleSubmit = () => {
    createBucket({ bucket: bucketName });
    setBucketName("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:max-w-4xl  p-5 gap-3">
      {/* Create Bucket */}
      <div className="flex justify-center items-center w-full">
        <input
          type="text"
          value={bucketName}
          placeholder="Type Your Bucket Name"
          className="input w-full border-black"
          onChange={(e) => setBucketName(e.target.value)}
        />
        <div className="cursor-pointer" onClick={() => handleSubmit()}>
          <PlusSquare size={60} color="#7b7474" weight="fill" />
        </div>
      </div>
      {/* Buckets */}

      <div className="flex flex-col w-full gap-4">
        {bucket.map((item) => (
          <div className="flex gap-2 items-start" key={item.id}>
            <div className="collapse rounded w-full">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex justify-between w-full">
                {item.bucket}
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <Card id={item.id} data={item} />
              </div>
            </div>

            <div>
              <CreateCard data={item} />
            </div>
          </div>
        ))}
      </div>

      {/* History */}

      <History />
    </div>
  );
};

export default Bucket;
