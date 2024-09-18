import React from "react";
import "./contato.css";

const Contato = () => {
  return (
    <main>
      <article class="contato">
        <h2>faça um orçamento</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, tenetur aut quas dicta atque esse.
        </p>

        <div class="center">
          <div class="form-container">
            <form action="submit_form.php" method="POST">
              <label for="nome"></label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="Nome"
                class="input-form"
              />

              <label for="idade"></label>
              <input
                class="input-form"
                type="number"
                id="idade"
                name="idade"
                required
                placeholder="Idade"
              />

              <label for="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />

              <label for="telefone"></label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                placeholder="Telefone"
              />

              <label for="local_tattoo"></label>
              <input
                type="text"
                id="local_tattoo"
                name="local_tattoo"
                required
                placeholder="Local da Tatto"
              />

              <label for="tamanho_tattoo"></label>
              <input
                type="text"
                id="tamanho_tattoo"
                name="tamanho_tattoo"
                required
                placeholder="Tamanho da Tatto"
              />

              <label for="primeira_tattoo">É sua primeira tattoo?</label>
              <select id="primeira_tattoo" name="primeira_tattoo" required>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>

              <label for="descricao_tattoo"></label>
              <textarea
                id="descricao_tattoo"
                name="descricao_tattoo"
                rows="4"
                cols="50"
                required
                placeholder="Conte um pouco sobre a Tattoo"
              ></textarea>
              <br />
              <br />

              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Contato;