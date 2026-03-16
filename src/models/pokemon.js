const validTypes = ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée']

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom de ce pokémon est déjà dans le pokédex'
        },
        validate: {
          is: {
            args: /^[a-zA-ZÀ-ÿ\s-]+$/,
            msg: "Le nom ne peut contenir que des lettres",
          },
          notEmpty: { msg: "Le nom ne peut pas être vide" },
          notNull: { msg: "Le nom est obligatoire" },
        },
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Nombres entiers uniquement" },
          min: { args: [0], msg: "Les HP doivent être positif" },
          max: { args: [999], msg: "Les HP ne peuvent pas dépasser 999" },
          notNull: { msg: "Les HP sont obligatoirement requis" },
        },
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Le CP doit être un nombre entier" },
          min: { args: [0], msg: "Le CP doit être positif" },
          max: { args: [999], msg: "Le CP ne peut pas dépasser 999" },
          notNull: { msg: "Le CP est obligatoire" },
        },
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: "L'image doit être une URL valide" },
          notNull: { msg: "L'image est obligatoire" },
        },
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("types").split();
        },
        set(types) {
          return this.setDataValue("types", types.join());
        },
        validate: {
          isTypesValid(value) {
            if (!value) {
              throw new Error("Veuillez ajouter au moins un type (3 max)");
            }
            if (value.split(",").length > 3) {
              throw new Error("3 types max");
            }
            value.split(',').forEach(type => {
              if(!validTypes.includes(type)) {
                throw new Error(`Veuillez renseigner un type valide parmis : ${validTypes}`)
              }
            });
          },
        },
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    },
  );
};
