import { trpc } from "../../../utils/trpc";
import { useRef } from "react";

const BetForm = ({
  currentBet,
  auctionId,
}: {
  currentBet: number;
  auctionId: number;
}) => {
  const betRef = useRef<HTMLInputElement>(null);
  const betMutation = trpc.auctions.bet.useMutation();

  async function bet() {
    if (betRef.current != null) {
      if (parseInt(betRef.current.value) <= currentBet) {
        betRef.current.value = String(currentBet);
        return;
      }
      await betMutation.mutateAsync({
        id: auctionId,
        bet: parseInt(betRef.current.value),
      });
      betRef.current.focus();
    } else {
      alert("Error whilst trying to read BetRef. See Console for more Info.");
      console.error("BETREF is not focused.");
    }
  }
  return (
    <>
      <p className="mt-4">Ein Gebot abgeben</p>
      <div className="flex w-full flex-row items-center">
        <input
          ref={betRef}
          className="h-full w-full grow border p-2"
          type={"number"}
          defaultValue={currentBet}
        />
        <button
          onClick={() => bet()}
          className="flex h-full flex-row break-keep border border-l-0 px-8 text-center"
        >
          Gebot abgeben
        </button>
      </div>
    </>
  );
};

export default BetForm;
