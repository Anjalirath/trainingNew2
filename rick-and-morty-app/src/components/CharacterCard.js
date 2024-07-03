import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CharacterCard = ({ character }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={character.name}
        height="140"
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Status: {character.status}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Species: {character.species}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Gender: {character.gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Origin: {character.origin.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Last Location: {character.location.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;




// import React from 'react';

// const CharacterCard = ({ character }) => {
//     return (
//       <div className="character-card">
//         <img src={character.image} alt={character.name} />
//         <h3>{character.name}</h3>
//         <p>ID: {character.id} - Created: {new Date(character.created).toLocaleDateString()}</p>
//         <p>Status: {character.status}</p>
//         <p>Species: {character.species}</p>
//         <p>Gender: {character.gender}</p>
//         <p>Origin: {character.origin.name}</p>
//         <p>Last Location: {character.location.name}</p>
//       </div>
//   );
// };

// export default CharacterCard;