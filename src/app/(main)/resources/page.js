"use client";
import ResSearch from "@/components/members/resources/ResSearch";
import ResourceCard from "@/components/members/resources/ResourceCard";
import ContributionForm from "@/components/members/resources/ContributionForm";
import { mockResources } from "@/pages/member/mockresouce";
import React, { useState } from "react";

const sources = ["All", "Mentor", "Community", "Friends"];

const MemberResourcesPage = () => {
  const [res, setRes] = useState("provided");
  const [src, setSrc] = useState("All");
  const [formVisible, setFormVisible] = useState(false);
  return (
    <div className="w-screen lg:w-full mobile-page lg:h-screen! flex flex-col">
      <div className="w-full grid grid-cols-2 pt-2">
        <button
          className={`py-4 w-full text-xl font-semibold ${res === "provided" ? "bg-zinc-900 rounded-t-2xl text-(--primary)" : ""}`}
          onClick={() => setRes("provided")}
        >
          Provided
        </button>
        <button
          className={`py-4 w-full text-xl font-semibold ${res === "contributed" ? "bg-zinc-900 rounded-t-2xl text-(--primary)" : ""}`}
          onClick={() => setRes("contributed")}
        >
          Contributed
        </button>
      </div>
      <div
        className={`relative w-full min-h-0 flex-1 flex flex-col bg-zinc-900 ${res === "provided" ? "rounded-tr-2xl" : "rounded-tl-2xl"}`}
      >
        <div className="px-4 py-2 sticky top-4">
          <ResSearch />
        </div>
        {res === "contributed" && (
          <div className="w-full flex py-4">
            <button
              className="mx-auto py-2 px-4 bg-(--wd-yellow-dark) rounded-xl text-black shadow-md transition cursor-pointer text-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-400"
              onClick={() => setFormVisible(true)}
            >
              Add a Contribution
            </button>
          </div>
        )}
        {res === "provided" && (
          <div className="px-6 py-4 flex gap-3 w-full min-w-0 overflow-x-auto wd-scroll">
            {sources.map((el) => (
              <button
                key={el}
                onClick={() => setSrc(el)}
                className={`px-6 py-2 rounded-2xl border border-(--wd-yellow-dark) ${src === el ? "bg-(--wd-yellow-dark) text-zinc-900" : "text-(--text)"}`}
              >
                {el}
              </button>
            ))}
          </div>
        )}
        <div
          className="
          p-4
          flex-1
          min-h-0
    grid
    gap-4
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    overflow-y-auto wd-scroll
  "
        >
          {mockResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
        {formVisible && (
          <ContributionForm onClose={() => setFormVisible(false)} />
        )}
      </div>
    </div>
  );
};

export default MemberResourcesPage;
