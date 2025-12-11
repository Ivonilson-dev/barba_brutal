import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";

export default function Landing() {
  return (
    <div className="container flex flex-col gap-10">
        <h1 className="text-6xl">Landing Page</h1>
        <NossosServicos />
        <NossosProfissionais />
    </div>
  );
}
