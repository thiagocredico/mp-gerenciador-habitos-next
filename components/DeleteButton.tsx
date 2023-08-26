"use client";

import Image from "next/image";

function DeleteButton({ habit }: { habit: string }) {
  return (
    <button>
      <Image
        src="/images/trash.svg"
        width={20}
        height={20}
        alt="Ícone de lixeira vermelha"
      />
    </button>
  );
}

export default DeleteButton;