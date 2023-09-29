import Button from "../Button";
import "./style.css";

function ContainerButton() {
  return (
    <div className="container__button">
      <Button>Buscar Parceiros</Button>
      <Button
        target="_blank"
        type="orange"
        href="https://seu.ze.delivery/cadastro-parceiro"
      >
        Quero me Tornar Parceiro
      </Button>
    </div>
  );
}

export default ContainerButton;
