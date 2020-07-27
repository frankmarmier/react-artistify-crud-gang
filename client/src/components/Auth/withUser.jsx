import React from 'react';
import UserContext from './UserContext';

// withUser est un Higher Order Component (HOC),
//  c'est une fonction qui prend un autre Component en parametre et retourne un autre
// composant.
// Cette technique est utilisée dans le but de pouvoir composer son application.
// Ce higher component ne fait qu'exposer le context du UserContext à n'importe quel Component
// passé en parametre.
// Le component withRouter de react-router-dom utilise la meme technique pour pouvoir exposer
//  match / history / location à n'importe quel component passé en parametre.

// S'utilise de la façon suivante =>
//  function MonComposant || class MonComposant{
// ...
// implentation de votre component...
// ...
// }

// export default withUser(MonComposant)
// -----------------^ ceci donne à votre composant accès au contexte via des props
// console.log(this.props) <= dans une classe.
// console.log(props) <= dans une fonction.

/* C'est une convention de nommer les HOC de cette façon : withXXX, vous pouvez l'appeler withToto si vous le souhaitez. */

const withUser = (AComponentToGivePropsTo) => {
  return function (props) {
    return (
      <UserContext.Consumer>
        {(context) => {
          return <AComponentToGivePropsTo {...props} context={context} />;
          // ----------------------------------------^ Le composant aura accès au context via props.context
          // return <AComponentToGivePropsTo {...props} toto={context} />;
          // ----------------------------------------^ Le composant aura accès au context via props.toto
        }}
      </UserContext.Consumer>
    );
  };
};

export default withUser;
