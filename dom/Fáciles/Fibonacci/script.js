const F = [1, 1];
const res = document.getElementById("F");
const nuevoElemento = document.createElement("p");

res.appendChild(
  nuevoElemento.appendChild(
    document.createTextNode("\n" + F[F.length - 1])
  )
);
res.appendChild(
  nuevoElemento.appendChild(
    document.createTextNode("\n" + F[F.length - 2])
  )
);
document.write('<button onclick="añadir(F)">Continuar serie</button>');
function añadir(F) {
  const nuevoElemento = document.createElement("li");
  const nuevoNumero =
    F[F.length - 1] + F[F.length - 2];
  F.push(nuevoNumero);
  res.appendChild(
    nuevoElemento.appendChild(
      document.createTextNode("\n" + F[F.length - 1])
    )
  );
}