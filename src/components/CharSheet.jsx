import React, { useState, useEffect } from "react";
import "./charSheet.css";

function CharacterSheetForm() {
  const proficiencyOptions = [
    {
      topic: "Maestria em armaduras e escudos",
      description:
        "Um ponto de proficiência permite o uso de armaduras leves, como couro, peles, tecidos reforçados e outros materiais leves que oferecem proteção básica. Essas armaduras são mais fáceis de se movimentar, mas oferecem menos proteção do que as armaduras pesadas. Também permite o uso de escudos. Com este ponto adicional na proficiência de Armadura, o personagem é capaz de utilizar armaduras médias. Essas armaduras oferecem uma proteção moderada, porém, são mais pesadas e podem limitar a furtividade do personagem. Ao alcançar o terceiro ponto nesta proficiência, o personagem ganha a habilidade de utilizar armaduras pesadas. Essas armaduras fornecem a maior proteção possível, mas são as mais pesadas e restritivas, impactando a velocidade e furtividade do personagem."
    },
    {
      topic: "Condução de Veículos Terrestres",
      description:
        "A capacidade de um personagem de usar montarias, carroças, charretes e outras formas de transporte tradicional terrestre. Criaturas só podem montar animais que sejam um tamanho maior que elas mesmas. Regalias podem usar essa proficiência como referência como parte de sua mecânica. Um ponto nesta proficiência permite uso de montarias simples: cavalos, burros, mulas, camelos, ou qualquer montaria comum que usa uma sela simples e anda em quatro patas. Alguma região pode ser mais comum andar em cachorros como um mastiff ou em tigre. O quão exótico é um animal fica na descrição do mestre. Um segundo ponto adicional permite o uso de carruagens, charretes, carroças e veículos de tração animal comuns. Um terceiro ponto adicional nesta proficiência permite a condução de veículos terrestres de grande porte, como trens, carros de combate ou veículos blindados."
    },
    {
      topic: "Condução de Veículos Aquáticos",
      description:
        "A capacidade de um personagem de conduzir veículos aquáticos tradicionais como barcos, jangadas, navios e outros. Regalias podem usar essa Habilidade como referência como parte de sua mecânica. Um ponto nesta proficiência permite a condução de embarcações simples: canoas, barcos a remo, jangadas, caiaques ou qualquer embarcação comum que usa uma remos ou o próprio corpo simples para remar. Um segundo ponto adicional permite a condução de escunas, pacotes e pequenas fragatas. Um terceiro ponto nesta proficiência permite a condução de naus, caravelas, galeras e grandes barcos. Um ponto adicional nesta proficiência permite a condução de embarcações maiores, como navios de guerra ou navios mercantes de grande porte."
    },
    {
      topic: "Condução Exótica",
      description:
        "A capacidade de um personagem de rapidamente se adaptar às complexidades de novas formas de veículos que encontra em uma jornada, ou que já foi exposto no passado. Regalias podem usar essa Habilidade como referência como parte de sua mecânica. Um ponto nesta proficiência permite a condução de montarias consideradas exóticas. Um segundo ponto adicional permite a condução de pequenos e médios veículos considerados exóticos, que andam sobre ou sob a terra e de veículos que navegam sobre as águas. Um terceiro ponto nesta proficiência permite a condução de veículos exóticos que navegam sob as águas ou que voam. Um quarto ponto adicional nesta proficiência permite a condução de veículos exóticos que possuam Habilidades especiais, como veículos subaquáticos capazes de explorar o fundo do oceano ou veículos voadores mágicos capazes de sair da atmosfera."
    },
    {
      topic: "Kit de arrombamento",
      description:
        "A capacidade de usar ferramentas especiais para abrir fechaduras e cadeados. Para executar essa tarefa é realizado um teste usando a destreza da criatura. Um primeiro ponto permite adicionar seu valor de Habilidade de destreza ao rolamento em um teste para abrir uma tranca. Um segundo ponto permite adicionar o valor de investigação ou percepção ao valor de destreza. Um terceiro ponto permite usar apenas uma ação para realizar essa ação em combate. Um quarto ponto adicional nesta proficiência permite desativar armadilhas complexas com as kit de arrombamento. Um quinto ponto adicional nesta proficiência permite abrir fechaduras mágicas ou encantadas, que requerem conhecimento especializado e ferramentas aprimoradas."
    },
    {
      topic: "Proficiência em Armas de Fogo",
      description:
        "A capacidade um personagem de usar especificamente armas de fogo, mesmo não sendo um combatente. Um ponto nesta proficiência permite o uso básico de armas de fogo, como pistolas e rifles. Um segundo ponto nesta proficiência permite usar armas de fogo exóticas ou experimentais, com habilidades especiais."
    },
    {
      topic: "Proficiência em Línguas Antigas",
      description:
        "Um ponto nesta proficiência permite compreender e traduzir inscrições em línguas antigas que se relacionem com sua descendência. Um segundo ponto adicional permite decifrar línguas antigas completamente desconhecidas após 1 hora de estudo. Um terceiro ponto nesta proficiência permite aprender e falar línguas antigas, comunicando-se com seres de eras passadas após estudar por 24 horas a linguagem de alguma forma."
    },
    {
      topic: "Proficiência em Arqueologia",
      description:
        "A Proficiência em Arqueologia permite ao personagem se tornar um especialista em descobrir e estudar artefatos antigos. Com conhecimento teórico e Habilidades práticas, eles são capazes de identificar, desvendar e restaurar esses objetos valiosos, contribuindo para a preservação da história e da cultura do passado. Um ponto nesta proficiência permite ao personagem identificar e catalogar artefatos antigos de valor histórico. Eles possuem conhecimento sobre diferentes culturas, períodos e estilos arquitetônicos, permitindo-lhes reconhecer e compreender a importância desses objetos. O personagem pode fazer testes de Habilidade para identificar corretamente os artefatos e determinar seu valor histórico e cultural. Ao possuir essa proficiência, o personagem recebe um bônus de +2 em todos os testes de Habilidade relacionados à identificação de artefatos, desvendar segredos em ruínas e restauração de artefatos. O personagem pode utilizar ferramentas de arqueologia, como pincéis, lentes de aumento e instrumentos de medição, para auxiliar em suas tarefas. Essas ferramentas fornecem um bônus adicional de +2 nos testes de Habilidade específicos relacionados à arqueologia. Ao descobrir e catalogar artefatos, o personagem pode obter recompensas adicionais, como ganhar conhecimento sobre eventos históricos relevantes, receber financiamento para futuras expedições ou ser convidado para participar de projetos arqueológicos renomados. Um segundo ponto adicional amplia as Habilidades de arqueologia do personagem. O personagem recebe um bônus de +2 em todos os testes de Habilidade relacionados a testes de investigação de ruínas e descoberta de tesouros. esse valor estaca com o primeiro bônus. No terceiro ponto nesta proficiência, o personagem adquire habilidades avançadas de restauração e conservação de artefatos arqueológicos danificados. Eles possuem conhecimento sobre técnicas de preservação, como limpeza, estabilização e restauração de objetos antigos. O personagem pode fazer testes de Habilidade para restaurar adequadamente os artefatos danificados, garantindo sua integridade e aumentando seu valor histórico. Além disso, o bônus de +2 agora se aplica a todos os testes de Habilidade relacionados à restauração de artefatos."
    },
    {
      topic: "Proficiência em Liderança",
      description:
        "A Proficiência em Liderança capacita o personagem a se tornar um líder eficaz, inspirando e coordenando seus aliados para alcançar objetivos comuns. Essa habilidade não apenas fortalece o grupo em termos de combate, mas também permite ao personagem liderar e comandar grandes grupos de seguidores. Um ponto nesta proficiência permite ao personagem inspirar e motivar seus aliados, concedendo bônus em testes e combate. O personagem é capaz de usar uma ação para para elevar o moral do grupo, incentivando-os a dar o melhor de si. Isso se reflete em um bônus de +2 em testes de Habilidade, no próximo minuto, realizados por aliados próximos. Pode usar essa ação 3 vezes por descanso longo. Um segundo ponto adicional amplia as habilidades de liderança do personagem. Agora, eles são capazes de coordenar táticas e estratégias em combate, melhorando a eficiência do grupo como um todo. O personagem pode, como uma ação, realizar um testes de habilidade de intuição ou investigação para avaliar a situação do campo de batalha, identificar pontos fracos dos inimigos e fornecer orientações táticas para seus aliados. Isso resulta em um bônus adicional de +2 nas rolagens de ataque de todos os membros do grupo sob o comando do personagem. Pode usar essa ação 3 vezes por descanso longo. Ao possuir um segundo ponto nessa proficiência, o personagem recebe um bônus de +2 em todos os testes de Habilidade relacionados a persuasão e negociação. No terceiro ponto nesta proficiência, o personagem adquire habilidades de liderança avançadas. Eles são capazes de liderar grandes grupos de seguidores, comandar exércitos ou liderar organizações. O personagem pode realizar testes de habilidade para inspirar e influenciar um grande número de pessoas, mantendo sua lealdade e obediência. Sob a liderança do personagem, esses seguidores se tornam mais eficazes em combate e nas atividades relacionadas ao objetivo da organização. Isso resulta em um bônus adicional de +2 em todos os testes de Habilidade realizados por seguidores e um bônus de +2 nas rolagens de ataque e dano de todos os membros do grupo sob o comando do personagem."
    },
    {
      topic: "Proficiência em Armas Exóticas",
      description:
        "O personagem recebeu treinamento, ou descobriu sozinho treinando muito, como usar efetivamente armas exóticas: Um ponto nessa proficiência o personagem adquire proficiência com uma arma da lista de armas exóticas. Um segundo ponto nessa proficiência o personagem adquire proficiência com mais duas armas da lista de armas exóticas. Um terceiro ponto nessa proficiência permite o uso de qualquer arma exótica."
    },
    {
      topic: "Proficiência em Esgrima",
      description:
        "Um ponto nessa proficiência, o personagem recebe o treinamento e a habilidade de lutar com espadas, adagas, floretes e sabres."
    },
    {
      topic: "Proficiência em Arco e Besta",
      description:
        "Um ponto nessa proficiência permite ao personagem utilizar arcos e bestas."
    },
    {
      topic: "Proficiência em Disfarce",
      description:
        "O personagem se torna capaz de usar disfarces para as mais diversas necessidades. Quando o personagem usa um disfarce o mestre pede um teste de enganação com dificuldade definida pelo contexto. quanto mais pontos de proficiência mais fácil o teste será. Um ponto nesta proficiência permite ao personagem criar disfarces simples para ocultar sua identidade em situações básicas. O personagem pode alterar sua aparência usando maquiagem, adereços e roupas adequadas. +2 em testes de furtividade e enganação enquanto disfarçado. Um segundo ponto adicional permite ao personagem criar disfarces mais elaborados e convincentes, enganando observadores atentos. O personagem pode imitar características físicas específicas, como altura, peso, voz e até mesmo traços faciais. +2 em testes de furtividade e enganação enquanto disfarçado. Um terceiro ponto nesta proficiência permite ao personagem se infiltrar em locais protegidos com maior facilidade. O personagem é capaz de imitar o comportamento e os trejeitos de uma pessoa ou criatura específica, tornando-se praticamente indistinguível dela. +10 em testes de furtividade e enganação enquanto disfarçado."
    },
    {
      topic: "Proficiência em Ataques em Área",
      description:
        "Um ponto nessa proficiência concede a opção de, ao sofrer um ataque em área, o personagem fazer um teste de reflexo, como uma reação, e reduzir o dano em um valor igual a metade do seu valor de Fortitude. Um segundo ponto aumenta a redução de dano para igual ao valor de Fortitude. Um terceiro ponto aumenta a redução de dano para igual 2x ao valor de Fortitude."
    },
    {
      topic: "Proficiência em Combate Anti-conjuradores",
      description:
        "Um ponto nesta proficiência permite ao personagem reconhecer sinais de magia e identificar conjuradores. Ele pode detectar a presença de magia ao seu redor e discernir quando alguém está lançando um feitiço ou utilizando habilidades mágicas. Se uma criatura conjurar qualquer Magia ou Feitiço (Regalias com essas tags) em uma distância dentro de seu alcance de ameaça, o personagem pode realizar um ataque de oportunidade. Um segundo ponto adicional aumenta a resistência do personagem contra magia. Efeitos mágicos que possuem uma chance de sucesso em porcentagem tem 10% menos chance de ter sucesso. Um terceiro ponto nesta proficiência permite ao personagem interromper o efeito de Magias ou Feitiços. Ao realizar ataques contra um conjurador o personagem pode tentar desfazer um Feitiço ou Magia que tenha duração maior que instantâneo, conjurada pelo mesmo. Cada ataque que acertar tem 10% de chance de desfazer o efeito da habilidade."
    }
  ];

  const [character, setCharacter] = useState({
    name: "",
    class: "",
    expecialization: "",
    exp: 0,
    race: "",
    level: 0,
    physique: {
      agility: 0,
      strength: 0,
      dexterity: 0,
      fortitude: 0,
      meleeCombat: 0,
      rangedCombat: 0,
      athletics: 0,
      acrobatics: 0
    },
    knowledge: {
      history: 0,
      intuition: 0,
      nature: 0,
      jurisprudence: 0,
      medicine: 0,
      technology: 0,
      theology: 0
    },
    exploration: {
      stealth: 0,
      investigation: 0,
      tracking: 0,
      perception: 0,
      survival: 0,
      animalHandling: 0,
      navigation: 0,
      traps: 0
    },
    arcana: {
      arcana: 0,
      occultism: 0,
      alchemy: 0,
      ritualism: 0,
      magicItemAppraisal: 0,
      magicTrapIdentification: 0,
      arcaneCombat: 0
    },
    social: {
      persuasion: 0,
      deception: 0,
      negotiation: 0,
      seduction: 0,
      intimidation: 0,
      performance: 0
    },
    proficiencies: []
  });

  useEffect(() => {
    const savedCharacter = JSON.parse(localStorage.getItem("character"));
    if (savedCharacter) {
      setCharacter(savedCharacter);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleProficiencyChange = (index, event) => {
    const { value } = event.target;
    const updatedProficiencies = [...character.proficiencies];
    updatedProficiencies[index].name = value;
    setCharacter({ ...character, proficiencies: updatedProficiencies });
  };

  const handleProficiencyLevelChange = (index, event) => {
    const { value } = event.target;
    const updatedProficiencies = [...character.proficiencies];
    updatedProficiencies[index].level = value;
    setCharacter({ ...character, proficiencies: updatedProficiencies });
  };

  const addProficiency = () => {
    setCharacter({
      ...character,
      proficiencies: [...character.proficiencies, { name: "", level: "" }]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("character", JSON.stringify(character));
    console.log("Character saved to local storage:", character);
  };

  return (
    <form onSubmit={handleSubmit} className="CharForm">
      {/* Informações Gerais */}
      <div className="boxHeader">
        <div className="inputAbilities">
          <label className="inputLabelHeader">
            <text-pt>Nome:</text-pt>
          </label>
          <input
            type="text"
            name="name"
            value={character.name}
            className="inputBoxHeader"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="inputAbilities" style={{ margin: "0px" }}>
          <div className="inputAbilities">
            <label className="inputLabelHeader">
              <text-pt>Classe:</text-pt>{" "}
            </label>
            <input
              type="text"
              name="class"
              value={character.class}
              className="inputBoxHeader"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="inputAbilities" style={{ margin: "0px" }}>
            <label className="inputLabelHeader">
              {" "}
              <text-pt>Especialização: </text-pt>
            </label>
            <input
              style={{ margin: "0px" }}
              type="text"
              name="expecialization"
              value={character.expecialization}
              className="inputBoxHeader"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="inputAbilities">
          <label className="inputLabelHeader">
            <text-pt>Raça:</text-pt>
          </label>
          <input
            type="text"
            name="race"
            value={character.race}
            className="inputBoxHeader"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="inputAbilities" style={{ margin: "0px" }}>
          <div className="inputAbilities">
            <label className="inputLabelHeader">
              <text-pt>Nível:</text-pt>{" "}
            </label>
            <input
              type="number"
              min={0}
              name="level"
              value={character.level}
              className="inputBoxHeader"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="inputAbilities" style={{ margin: "0px" }}>
            <label className="inputLabelHeader">
              <text-pt>Exp: </text-pt>
            </label>
            <input
              style={{ margin: "0px" }}
              type="number"
              min={0}
              name="exp"
              value={character.exp}
              className="inputBoxHeader"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          {/* Físico */}
          <h2>Físico</h2>
          {Object.entries(character.physique).map(([key, value]) => (
            <div className="inputAbilities" key={key}>
              <label className="inputLabel" key={key}>
                {" "}
                <text-pt>{key}:</text-pt>
              </label>
              <input
                type="number"
                min={0}
                name={`physique.${key}`}
                value={character.physique.key}
                className="inputBox"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          ))}
        </div>
        <div className="box">
          {/* Conhecimento */}
          <h2>Conhecimento</h2>
          {Object.entries(character.knowledge).map(([key, value]) => (
            <div className="inputAbilities" key={key}>
              <label className="inputLabel" key={key}>
                <text-pt>{key}:</text-pt>
              </label>
              <input
                type="number"
                min={0}
                name={`knowledge.${key}`}
                value={character.knowledge.key}
                className="inputBox"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          ))}
        </div>

        <div className="box">
          {/* Exploração */}
          <h2>Exploração</h2>
          {Object.entries(character.exploration).map(([key, value]) => (
            <div className="inputAbilities" key={key}>
              <label className="inputLabel" key={key}>
                <text-pt>{key}:</text-pt>
              </label>
              <input
                type="number"
                min={0}
                name={`exploration.${key}`}
                value={character.exploration.key}
                className="inputBox"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          ))}
        </div>
        <div className="box">
          {/* Arcano */}
          <h2>Arcano</h2>
          {Object.entries(character.arcana).map(([key, value]) => (
            <div className="inputAbilities" key={key}>
              <label className="inputLabel" key={key}>
                {" "}
                <text-pt>{key}:</text-pt>
              </label>
              <input
                type="number"
                min={0}
                name={`arcana.${key}`}
                value={character.arcana.key}
                className="inputBox"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          ))}
        </div>

        {/* Social */}

        <div className="box">
          <h2>Social</h2>
          {Object.entries(character.social).map(([key, value]) => (
            <div className="inputAbilities" key={key}>
              <label className="inputLabel" key={key}>
                {" "}
                <text-pt>{key}:</text-pt>
              </label>
              <input
                type="number"
                min={0}
                name={`social.${key}`}
                value={character.social.key}
                className="inputBox"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Proficiências */}
      <div className="container">
        {character.proficiencies.map((proficiency, index) => (
          <div key={index}>
            <h2>Escolha uma Proficiência:</h2>
            <select
              value={proficiency.name}
              onChange={(e) => handleProficiencyChange(index, e)}
            >
              <option value="">Nenhuma</option>
              {proficiencyOptions.map((option, i) => (
                <option key={i} value={option.topic}>
                  {option.topic}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={proficiency.level}
              onChange={(e) => handleProficiencyLevelChange(index, e)}
            />
            {proficiency.name && (
              <div>
                <h3>{proficiency.name}</h3>
                <p>
                  {
                    proficiencyOptions.find(
                      (option) => option.topic === proficiency.name
                    ).description
                  }
                </p>
              </div>
            )}
          </div>
        ))}
        <button className="btn" type="button" onClick={addProficiency}>
          <text-pt>Adicionar Proficiência</text-pt>
        </button>
      </div>

      <button className="btnSubmit" type="submit">
        <text-pt>Enviar</text-pt>
      </button>
    </form>
  );
}

export default CharacterSheetForm;
