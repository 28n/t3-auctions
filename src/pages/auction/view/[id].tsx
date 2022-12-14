import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import Heading from "../../../components/common/heading";
import SubHeading from "../../../components/common/subheading";
import AuctionCard from "../../../components/auction/view/auctioncard";

interface AuctionDataType {
  id: number;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  bet: number;
  isSold: boolean;
  soldTo: string;
}

const Auction: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const res = trpc.auctions.getInfo.useQuery({ id: parseInt(id) });

  const refetch = () => {
    alert("refetch");
  };
  return (
    <>
      <Heading>Detailansicht</Heading>
      <SubHeading>Auktions-ID: {id}</SubHeading>
      <AuctionCard data={res?.data as AuctionDataType} refetch={refetch} />
    </>
  );
};

export default Auction;
