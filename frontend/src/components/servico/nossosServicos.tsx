import servicos from "@/data/constants/servicos";
import ItemServico from "./itemServico";

export default function NossosServicos () {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {servicos.map(servico => (
                <ItemServico key={servico.id} servico={servico}/>
            ))}
        </div>
    )
}