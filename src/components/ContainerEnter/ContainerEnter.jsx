import "./style.css";
import ContainerButton from "../ContainerButton/ContainerButton";

function ContainerEnter() {
  return (
    <div className="enter">
      <h3>
        Bem vindo ao mapa de parceiros do
        <span className="highlight">Zé Delivery</span>
      </h3>
      <p>
        Aqui você encontra todos os bares/estabelecimentos próximos a sua
        localização.
      </p>
      <ContainerButton />
    </div>
  );
}

export default ContainerEnter;
