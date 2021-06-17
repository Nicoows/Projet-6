const Sauce = require('../Models/Sauce');

exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const sauce = new Sauce({ 
      ...req.body,
      imageUrl : "",
      likes : 0,
      dislikes : 0,
      usersLiked : [],
      usersDisliked : []
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
}