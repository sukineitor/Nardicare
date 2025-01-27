const remedies = [
    // Categoría: digestivo (25 recetas)
    {
        id: 1,
        name: "Té de Jengibre",
        type: "herbal",
        description: "Ayuda a aliviar las náuseas y mejora la digestión.",
        ingredients: ["Jengibre fresco", "Agua caliente", "Miel (opcional)"],
        preparation: "1. Pela y corta en rodajas finas 2-3 cm de jengibre fresco.\n2. Coloca el jengibre en una taza y vierte agua hirviendo sobre él.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela el té y añade miel al gusto si lo deseas.",
        rating: 0,
        image: "https://i.pinimg.com/736x/b9/f7/2e/b9f72e32f1f9999de31e422525644fcb.jpg",
        category: "digestivo"
    },
    {
        id: 2,
        name: "Infusión de Menta",
        type: "herbal",
        description: "Alivia los problemas digestivos y reduce los gases.",
        ingredients: ["Hojas de menta fresca", "Agua caliente"],
        preparation: "1. Coloca 5-6 hojas de menta en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/1.jpg",
        category: "digestivo"
    },
    {
        id: 3,
        name: "Agua de Limón en Ayunas",
        type: "food",
        description: "Estimula la digestión y ayuda a desintoxicar el organismo.",
        ingredients: ["Limón", "Agua tibia"],
        preparation: "1. Exprime medio limón en un vaso de agua tibia.\n2. Bebe la mezcla en ayunas, 30 minutos antes del desayuno.",
        rating: 0,
        image: "img/2.jpg",
        category: "digestivo"
    },
    {
        id: 4,
        name: "Té de Manzanilla",
        type: "herbal",
        description: "Calma el estómago y reduce la inflamación intestinal.",
        ingredients: ["Flores de manzanilla secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharada de flores de manzanilla en una taza.\n2. Vierte agua caliente sobre las flores.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/3.jpg",
        category: "digestivo"
    },
    {
        id: 5,
        name: "Batido de Papaya",
        type: "food",
        description: "Mejora la digestión y previene el estreñimiento.",
        ingredients: ["Papaya madura", "Agua", "Miel (opcional)"],
        preparation: "1. Pela y corta la papaya en trozos.\n2. Licúa la papaya con un poco de agua.\n3. Añade miel al gusto si lo deseas.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/4.jpg",
        category: "digestivo"
    },
    {
        id: 6,
        name: "Infusión de Hinojo",
        type: "herbal",
        description: "Reduce los gases y alivia los cólicos.",
        ingredients: ["Semillas de hinojo", "Agua caliente"],
        preparation: "1. Machaca ligeramente 1 cucharadita de semillas de hinojo.\n2. Colócalas en una taza y vierte agua caliente.\n3. Deja reposar durante 10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/5.jpg",
        category: "digestivo"
    },
    {
        id: 7,
        name: "Jugo de Aloe Vera",
        type: "herbal",
        description: "Alivia la acidez y mejora la salud intestinal.",
        ingredients: ["Gel de aloe vera", "Agua", "Limón (opcional)"],
        preparation: "1. Extrae el gel de una hoja de aloe vera.\n2. Mezcla 2 cucharadas de gel con un vaso de agua.\n3. Añade unas gotas de limón si lo deseas.\n4. Bebe en ayunas.",
        rating: 0,
        image: "img/6.jpg",
        category: "digestivo"
    },
    {
        id: 8,
        name: "Té de Anís Estrellado",
        type: "herbal",
        description: "Alivia los cólicos y mejora la digestión.",
        ingredients: ["Anís estrellado", "Agua caliente"],
        preparation: "1. Coloca 1-2 estrellas de anís en una taza.\n2. Vierte agua caliente sobre ellas.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/7.jpg",
        category: "digestivo"
    },
    {
        id: 9,
        name: "Compota de Manzana",
        type: "food",
        description: "Suaviza el sistema digestivo y alivia el estreñimiento.",
        ingredients: ["Manzanas", "Agua", "Canela en polvo"],
        preparation: "1. Pela y corta las manzanas en trozos.\n2. Cocina las manzanas en agua con un poco de canela hasta que estén blandas.\n3. Tritura la mezcla hasta obtener un puré.\n4. Consume tibio o frío.",
        rating: 0,
        image: "img/8.jpg",
        category: "digestivo"
    },
    {
        id: 10,
        name: "Té de Comino",
        type: "herbal",
        description: "Reduce la hinchazón y mejora la digestión.",
        ingredients: ["Semillas de comino", "Agua caliente"],
        preparation: "1. Machaca ligeramente 1 cucharadita de semillas de comino.\n2. Colócalas en una taza y vierte agua caliente.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/9.jpg",
        category: "digestivo"
    },
    {
        id: 11,
        name: "Smoothie de Kiwi y Piña",
        type: "food",
        description: "Mejora la digestión y aporta enzimas digestivas.",
        ingredients: ["Kiwi", "Piña", "Agua"],
        preparation: "1. Pela y corta 1 kiwi y 1 rodaja de piña.\n2. Licúa las frutas con un poco de agua.\n3. Bebe inmediatamente.",
        rating: 0,
        image: "img/10.jpg",
        category: "digestivo"
    },
    {
        id: 12,
        name: "Infusión de Regaliz",
        type: "herbal",
        description: "Alivia la acidez y protege la mucosa gástrica.",
        ingredients: ["Raíz de regaliz", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de raíz de regaliz en una taza.\n2. Vierte agua caliente sobre ella.\n3. Deja reposar durante 10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/11.jpg",
        category: "digestivo"
    },
    {
        id: 13,
        name: "Agua de Avena",
        type: "food",
        description: "Calma el sistema digestivo y aporta fibra.",
        ingredients: ["Avena en hojuelas", "Agua", "Canela (opcional)"],
        preparation: "1. Remoja 3 cucharadas de avena en 1 vaso de agua durante la noche.\n2. Por la mañana, licúa la mezcla con un poco más de agua.\n3. Cuela y añade canela al gusto.\n4. Bebe en ayunas.",
        rating: 0,
        image: "img/12.jpg",
        category: "digestivo"
    },
    {
        id: 14,
        name: "Té de Albahaca",
        type: "herbal",
        description: "Reduce los gases y calma los espasmos estomacales.",
        ingredients: ["Hojas de albahaca fresca", "Agua caliente"],
        preparation: "1. Coloca 5-6 hojas de albahaca en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/13.jpg",
        category: "digestivo"
    },
    {
        id: 15,
        name: "Jugo de Col",
        type: "food",
        description: "Ayuda a curar úlceras y mejora la salud intestinal.",
        ingredients: ["Col", "Agua"],
        preparation: "1. Lava y corta 1/4 de col en trozos.\n2. Licúa la col con un poco de agua.\n3. Cuela el jugo.\n4. Bebe inmediatamente, preferiblemente en ayunas.",
        rating: 0,
        image: "img/14.jpg",
        category: "digestivo"
    },
    {
        id: 16,
        name: "Infusión de Salvia",
        type: "herbal",
        description: "Mejora la digestión y reduce la inflamación intestinal.",
        ingredients: ["Hojas de salvia secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de salvia en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/15.jpg",
        category: "digestivo"
    },
    {
        id: 17,
        name: "Batido de Plátano y Yogur",
        type: "food",
        description: "Calma el estómago y aporta probióticos.",
        ingredients: ["Plátano maduro", "Yogur natural", "Miel"],
        preparation: "1. Pela y corta un plátano maduro.\n2. Licúa el plátano con 1 vaso de yogur natural.\n3. Añade una cucharadita de miel.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/16.jpg",
        category: "digestivo"
    },
    {
        id: 18,
        name: "Té de Diente de León",
        type: "herbal",
        description: "Estimula la producción de bilis y mejora la digestión.",
        ingredients: ["Hojas de diente de león secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharada de hojas de diente de león en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/17.jpg",
        category: "digestivo"
    },
    {
        id: 19,
        name: "Agua de Pepino",
        type: "food",
        description: "Hidrata y ayuda a eliminar toxinas del sistema digestivo.",
        ingredients: ["Pepino", "Agua", "Limón (opcional)"],
        preparation: "1. Lava y corta un pepino en rodajas.\n2. Coloca las rodajas en una jarra con agua.\n3. Deja reposar en el refrigerador durante 2 horas.\n4. Añade unas gotas de limón si lo deseas y bebe.",
        rating: 0,
        image: "img/18.jpg",
        category: "digestivo"
    },
    {
        id: 20,
        name: "Infusión de Melisa",
        type: "herbal",
        description: "Calma los nervios del estómago y reduce los espasmos.",
        ingredients: ["Hojas de melisa secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de melisa en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/19.jpg",
        category: "digestivo"
    },
    {
        id: 21,
        name: "Jugo de Zanahoria y Apio",
        type: "food",
        description: "Estimula la digestión y aporta fibra.",
        ingredients: ["Zanahorias", "Apio", "Agua"],
        preparation: "1. Lava y corta 2 zanahorias y 2 tallos de apio.\n2. Licúa las verduras con un poco de agua.\n3. Cuela el jugo si lo deseas.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/20.jpg",
        category: "digestivo"
    },
    {
        id: 22,
        name: "Té de Cúrcuma",
        type: "herbal",
        description: "Reduce la inflamación y mejora la digestión.",
        ingredients: ["Cúrcuma en polvo", "Pimienta negra", "Agua caliente", "Miel"],
        preparation: "1. Mezcla 1/4 cucharadita de cúrcuma y una pizca de pimienta negra en una taza.\n2. Vierte agua caliente sobre la mezcla.\n3. Añade miel al gusto.\n4. Remueve bien y bebe.",
        rating: 0,
        image: "img/21.jpg",
        category: "digestivo"
    },
    {
        id: 23,
        name: "Batido de Espinacas y Plátano",
        type: "food",
        description: "Aporta fibra y nutrientes que favorecen la digestión.",
        ingredients: ["Espinacas frescas", "Plátano maduro", "Agua"],
        preparation: "1. Lava un puñado de espinacas.\n2. Pela un plátano maduro.\n3. Licúa las espinacas y el plátano con un poco de agua.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/22.jpg",
        category: "digestivo"
    },
    {
        id: 24,
        name: "Infusión de Romero",
        type: "herbal",
        description: "Estimula la producción de jugos gástricos y mejora la digestión.",
        ingredients: ["Hojas de romero frescas", "Agua caliente"],
        preparation: "1. Coloca 1-2 ramitas de romero fresco en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/23.jpg",
        category: "digestivo"
    },
    {
        id: 25,
        name: "Agua de Chía",
        type: "food",
        description: "Hidrata y aporta fibra para mejorar la digestión.",
        ingredients: ["Semillas de chía", "Agua", "Limón (opcional)"],
        preparation: "1. Remoja 1 cucharada de semillas de chía en un vaso de agua durante 30 minutos.\n2. Remueve la mezcla.\n3. Añade unas gotas de limón si lo deseas.\n4. Bebe lentamente.",
        rating: 0,
        image: "img/24.jpg",
        category: "digestivo"
    },

    // Categoría: respiratorio (25 recetas)
    {
        id: 26,
        name: "Té de Eucalipto",
        type: "herbal",
        description: "Despeja las vías respiratorias y alivia la congestión.",
        ingredients: ["Hojas de eucalipto secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de eucalipto en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/25.jpg",
        category: "respiratorio"
    },
    {
        id: 27,
        name: "Jarabe de Cebolla",
        type: "food",
        description: "Alivia la tos y ayuda a expectorar.",
        ingredients: ["Cebolla", "Miel"],
        preparation: "1. Corta una cebolla en rodajas finas.\n2. Coloca las rodajas en un tazón y cúbrelas con miel.\n3. Deja reposar durante la noche.\n4. Toma una cucharada del jarabe resultante según sea necesario.",
        rating: 0,
        image: "img/26.jpg",
        category: "respiratorio"
    },
    {
        id: 28,
        name: "Infusión de Tomillo",
        type: "herbal",
        description: "Tiene propiedades expectorantes y antisépticas.",
        ingredients: ["Hojas de tomillo secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de tomillo en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/27.jpg",
        category: "respiratorio"
    },
    {
        id: 29,
        name: "Vapor de Eucalipto",
        type: "herbal",
        description: "Despeja las vías respiratorias y alivia la congestión nasal.",
        ingredients: ["Hojas de eucalipto frescas o aceite esencial", "Agua caliente"],
        preparation: "1. Hierve agua en una olla.\n2. Añade hojas de eucalipto o unas gotas de aceite esencial.\n3. Cubre tu cabeza con una toalla e inhala el vapor durante 5-10 minutos.",
        rating: 0,
        image: "img/28.jpg",
        category: "respiratorio"
    },
    {
        id: 30,
        name: "Jugo de Naranja y Zanahoria",
        type: "food",
        description: "Refuerza el sistema inmunológico y mejora la salud respiratoria.",
        ingredients: ["Naranjas", "Zanahorias"],
        preparation: "1. Exprime 2 naranjas.\n2. Licúa 2 zanahorias.\n3. Mezcla ambos jugos.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/29.jpg",
        category: "respiratorio"
    },
    {
        id: 31,
        name: "Té de Jengibre y Limón",
        type: "herbal",
        description: "Alivia el dolor de garganta y tiene propiedades antiinflamatorias.",
        ingredients: ["Jengibre fresco", "Limón", "Miel", "Agua caliente"],
        preparation: "1. Ralla 1 cucharadita de jengibre fresco.\n2. Coloca el jengibre en una taza y añade el jugo de medio limón.\n3. Vierte agua caliente y añade miel al gusto.\n4. Deja reposar 5 minutos, cuela y bebe.",
        rating: 0,
        image: "img/30.jpg",
        category: "respiratorio"
    },
    {
        id: 32,
        name: "Gárgaras de Agua con Sal",
        type: "food",
        description: "Alivia el dolor de garganta y reduce la inflamación.",
        ingredients: ["Agua tibia", "Sal"],
        preparation: "1. Disuelve 1/4 de cucharadita de sal en 1 vaso de agua tibia.\n2. Haz gárgaras con la solución durante 30 segundos.\n3. Escupe el agua. No la tragues.\n4. Repite varias veces al día.",
        rating: 0,
        image: "img/31.jpg",
        category: "respiratorio"
    },
    {
        id: 33,
        name: "Infusión de Orégano",
        type: "herbal",
        description: "Tiene propiedades antivirales y expectorantes.",
        ingredients: ["Hojas de orégano secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de orégano en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/32.jpg",
        category: "respiratorio"
    },
    {
        id: 34,
        name: "Batido de Espinacas y Piña",
        type: "food",
        description: "Rico en vitamina C y antioxidantes para fortalecer el sistema inmunológico.",
        ingredients: ["Espinacas frescas", "Piña", "Agua"],
        preparation: "1. Lava un puñado de espinacas.\n2. Pela y corta 1/2 taza de piña.\n3. Licúa las espinacas y la piña con un poco de agua.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/33.jpg",
        category: "respiratorio"
    },
    {
        id: 35,
        name: "Té de Equinácea",
        type: "herbal",
        description: "Estimula el sistema inmunológico y ayuda a combatir infecciones respiratorias.",
        ingredients: ["Raíz de equinácea seca", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de raíz de equinácea en una taza.\n2. Vierte agua caliente sobre la raíz.\n3. Deja reposar durante 10-15 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/34.jpg",
        category: "respiratorio"
    },
    {
        id: 36,
        name: "Sopa de Ajo",
        type: "food",
        description: "Tiene propiedades antibacterianas y fortalece el sistema inmunológico.",
        ingredients: ["Ajo", "Caldo de pollo", "Pan tostado"],
        preparation: "1. Machaca 3-4 dientes de ajo.\n2. Calienta 2 tazas de caldo de pollo.\n3. Añade el ajo machacado y cocina a fuego lento durante 10 minutos.\n4. Sirve con pan tostado.",
        rating: 0,
        image: "img/35.jpg",
        category: "respiratorio"
    },
    {
        id: 37,
        name: "Inhalación de Romero",
        type: "herbal",
        description: "Despeja las vías respiratorias y tiene propiedades antisépticas.",
        ingredients: ["Hojas de romero frescas", "Agua caliente"],
        preparation: "1. Coloca un puñado de hojas de romero en un bol.\n2. Vierte agua caliente sobre las hojas.\n3. Cubre tu cabeza con una toalla e inhala el vapor durante 5-10 minutos.",
        rating: 0,
        image: "img/36.jpg",
        category: "respiratorio"
    },
    {
        id: 38,
        name: "Té de Regaliz",
        type: "herbal",
        description: "Alivia la tos y tiene propiedades antiinflamatorias.",
        ingredients: ["Raíz de regaliz seca", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de raíz de regaliz en una taza.\n2. Vierte agua caliente sobre la raíz.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/37.jpg",
        category: "respiratorio"
    },
    {
        id: 39,
        name: "Batido de Kiwi y Naranja",
        type: "food",
        description: "Rico en vitamina C para fortalecer el sistema inmunológico.",
        ingredients: ["Kiwi", "Naranja", "Agua"],
        preparation: "1. Pela y corta 1 kiwi.\n2. Exprime 1 naranja.\n3. Licúa el kiwi con el jugo de naranja y un poco de agua.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/38.jpg",
        category: "respiratorio"
    },
    {
        id: 40,
        name: "Infusión de Gordolobo",
        type: "herbal",
        description: "Alivia la tos y tiene propiedades expectorantes.",
        ingredients: ["Flores de gordolobo secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de flores de gordolobo en una taza.\n2. Vierte agua caliente sobre las flores.\n3. Deja reposar durante 10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/39.jpg",
        category: "respiratorio"
    },
    {
        id: 41,
        name: "Jarabe de Cebolla y Miel",
        type: "food",
        description: "Alivia la tos y tiene propiedades antibacterianas.",
        ingredients: ["Cebolla", "Miel"],
        preparation: "1. Corta una cebolla en rodajas finas.\n2. Coloca las rodajas en un tazón y cúbrelas con miel.\n3. Deja reposar durante la noche.\n4. Toma una cucharada del jarabe resultante 3 veces al día.",
        rating: 0,
        image: "img/40.jpg",
        category: "respiratorio"
    },
    {
        id: 42,
        name: "Té de Hisopo",
        type: "herbal",
        description: "Alivia la congestión y tiene propiedades expectorantes.",
        ingredients: ["Hojas de hisopo secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de hisopo en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/41.jpg",
        category: "respiratorio"
    },
    {
        id: 43,
        name: "Batido de Espinacas y Manzana",
        type: "food",
        description: "Rico en antioxidantes y vitaminas para fortalecer el sistema inmunológico.",
        ingredients: ["Espinacas frescas", "Manzana verde", "Agua"],
        preparation: "1. Lava un puñado de espinacas.\n2. Pela y corta 1 manzana verde.\n3. Licúa las espinacas y la manzana con un poco de agua.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/42.jpg",
        category: "respiratorio"
    },
    {
        id: 44,
        name: "Infusión de Malva",
        type: "herbal",
        description: "Alivia la irritación de garganta y tiene propiedades antiinflamatorias.",
        ingredients: ["Flores de malva secas", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de flores de malva en una taza.\n2. Vierte agua caliente sobre las flores.\n3. Deja reposar durante 5-10 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/43.jpg",
        category: "respiratorio"
    },
    {
        id: 45,
        name: "Jugo de Remolacha y Zanahoria",
        type: "food",
        description: "Rico en antioxidantes y mejora la oxigenación de la sangre.",
        ingredients: ["Remolacha", "Zanahoria", "Manzana"],
        preparation: "1. Lava y pela 1 remolacha pequeña, 2 zanahorias y 1 manzana.\n2. Licúa todos los ingredientes.\n3. Cuela el jugo si lo deseas.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/44.jpg",
        category: "respiratorio"
    },
    {
        id: 46,
        name: "Té de Saúco",
        type: "herbal",
        description: "Alivia los síntomas del resfriado y tiene propiedades antivirales.",
        ingredients: ["Flores de saúco secas", "Agua caliente"],
        preparation: "1. Coloca 2 cucharaditas de flores de saúco en una taza.\n2. Vierte agua caliente sobre las flores.\n3. Deja reposar durante 10-15 minutos.\n4. Cuela y bebe.",
        rating: 0,
        image: "img/45.jpg",
        category: "respiratorio"
    },
    {
        id: 47,
        name: "Sopa de Pollo",
        type: "food",
        description: "Alivia los síntomas del resfriado y proporciona hidratación.",
        ingredients: ["Caldo de pollo", "Zanahoria", "Apio", "Cebolla", "Ajo"],
        preparation: "1. Prepara un caldo de pollo casero.\n2. Añade zanahorias, apio y cebolla picados.\n3. Agrega un diente de ajo machacado.\n4. Cocina a fuego lento durante 20 minutos.\n5. Sirve caliente.",
        rating: 0,
        image: "img/46.jpg",
        category: "respiratorio"
    },
    {
        id: 48,
        name: "Inhalación de Menta",
        type: "herbal",
        description: "Despeja las vías respiratorias y alivia la congestión nasal.",
        ingredients: ["Hojas de menta fresca o aceite esencial", "Agua caliente"],
        preparation: "1. Hierve agua en una olla.\n2. Añade hojas de menta fresca o unas gotas de aceite esencial.\n3. Cubre tu cabeza con una toalla e inhala el vapor durante 5-10 minutos.",
        rating: 0,
        image: "img/47.jpg",
        category: "respiratorio"
    },
    {
        id: 49,
        name: "Té de Tomillo y Miel",
        type: "herbal",
        description: "Alivia la tos y tiene propiedades antibacterianas.",
        ingredients: ["Hojas de tomillo secas", "Miel", "Agua caliente"],
        preparation: "1. Coloca 1 cucharadita de hojas de tomillo en una taza.\n2. Vierte agua caliente sobre las hojas.\n3. Deja reposar durante 5-7 minutos.\n4. Cuela y añade 1 cucharada de miel. Mezcla bien y bebe.",
        rating: 0,
        image: "img/48.jpg",
        category: "respiratorio"
    },
    {
        id: 50,
        name: "Batido de Papaya y Naranja",
        type: "food",
        description: "Rico en vitamina C y enzimas que ayudan a combatir infecciones.",
        ingredients: ["Papaya madura", "Naranja", "Agua"],
        preparation: "1. Pela y corta 1 taza de papaya madura.\n2. Exprime 1 naranja.\n3. Licúa la papaya con el jugo de naranja y un poco de agua.\n4. Bebe inmediatamente.",
        rating: 0,
        image: "img/49.jpg",
        category: "respiratorio"
    },

    // Categoría: belleza (25 recetas)
    {
        id: 51,
        name: "Mascarilla de Aguacate y Miel",
        type: "food",
        description: "Hidrata y nutre la piel del rostro.",
        ingredients: ["Aguacate maduro", "Miel"],
        preparation: "1. Machaca la pulpa de medio aguacate.\n2. Mezcla con 1 cucharada de miel.\n3. Aplica sobre el rostro limpio.\n4. Deja actuar durante 15-20 minutos.\n5. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/50.jpg",
        category: "belleza"
    },
    {
        id: 52,
        name: "Exfoliante de Azúcar y Aceite de Coco",
        type: "food",
        description: "Elimina células muertas y suaviza la piel.",
        ingredients: ["Azúcar", "Aceite de coco"],
        preparation: "1. Mezcla 1/2 taza de azúcar con 1/4 taza de aceite de coco.\n2. Aplica sobre la piel húmeda con movimientos circulares.\n3. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/51.jpg",
        category: "belleza"
    },
    {
        id: 53,
        name: "Tónico de Agua de Rosas",
        type: "herbal",
        description: "Refresca y tonifica la piel.",
        ingredients: ["Pétalos de rosa", "Agua destilada"],
        preparation: "1. Coloca un puñado de pétalos de rosa en un frasco.\n2. Cubre con agua destilada.\n3. Deja reposar durante 24 horas.\n4. Cuela y guarda en un frasco limpio.\n5. Aplica con un algodón sobre el rostro limpio.",
        rating: 0,
        image: "img/52.jpg",
        category: "belleza"
    },
    {
        id: 54,
        name: "Mascarilla de Arcilla Verde",
        type: "other",
        description: "Purifica y desintoxica la piel.",
        ingredients: ["Arcilla verde en polvo", "Agua"],
        preparation: "1. Mezcla 2 cucharadas de arcilla verde con agua hasta formar una pasta.\n2. Aplica sobre el rostro limpio.\n3. Deja actuar durante 10-15 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/53.jpg",
        category: "belleza"
    },
    {
        id: 55,
        name: "Acondicionador de Aguacate para Cabello",
        type: "food",
        description: "Nutre y suaviza el cabello.",
        ingredients: ["Aguacate maduro", "Aceite de oliva", "Miel"],
        preparation: "1. Machaca la pulpa de un aguacate.\n2. Mezcla con 2 cucharadas de aceite de oliva y 1 cucharada de miel.\n3. Aplica sobre el cabello húmedo.\n4. Deja actuar durante 30 minutos.\n5. Enjuaga bien.",
        rating: 0,
        image: "img/54.jpg",
        category: "belleza"
    },
    {
        id: 56,
        name: "Mascarilla de Yogur y Miel",
        type: "food",
        description: "Hidrata y suaviza la piel.",
        ingredients: ["Yogur natural", "Miel"],
        preparation: "1. Mezcla 2 cucharadas de yogur natural con 1 cucharada de miel.\n2. Aplica sobre el rostro limpio.\n3. Deja actuar durante 15-20 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/55.jpg",
        category: "belleza"
    },
    {
        id: 57,
        name: "Exfoliante de Café para Cuerpo",
        type: "food",
        description: "Elimina células muertas y mejora la circulación.",
        ingredients: ["Café molido", "Aceite de coco"],
        preparation: "1. Mezcla 1/2 taza de café molido con 1/4 taza de aceite de coco.\n2. Aplica sobre la piel húmeda con movimientos circulares.\n3. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/56.jpg",
        category: "belleza"
    },
    {
        id: 58,
        name: "Mascarilla de Pepino",
        type: "food",
        description: "Refresca y descongestiona la piel.",
        ingredients: ["Pepino"],
        preparation: "1. Licúa medio pepino.\n2. Aplica la pulpa sobre el rostro limpio.\n3. Deja actuar durante 15-20 minutos.\n4. Enjuaga con agua fría.",
        rating: 0,
        image: "img/57.jpg",
        category: "belleza"
    },
    {
        id: 59,
        name: "Aceite de Coco para Cabello",
        type: "food",
        description: "Nutre y fortalece el cabello.",
        ingredients: ["Aceite de coco"],
        preparation: "1. Calienta ligeramente el aceite de coco.\n2. Aplica sobre el cabello seco, masajeando desde las raíces hasta las puntas.\n3. Deja actuar durante 30 minutos o toda la noche.\n4. Lava el cabello como de costumbre.",
        rating: 0,
        image: "img/58.jpg",
        category: "belleza"
    },
    {
        id: 60,
        name: "Mascarilla de Avena y Miel",
        type: "food",
        description: "Calma y suaviza la piel sensible.",
        ingredients: ["Avena en polvo", "Miel", "Agua tibia"],
        preparation: "1. Mezcla 2 cucharadas de avena en polvo con 1 cucharada de miel y un poco de agua tibia hasta formar una pasta.\n2. Aplica sobre el rostro limpio.\n3. Deja actuar durante 15-20 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/59.jpg",
        category: "belleza"
    },
    {
        id: 61,
        name: "Tónico de Manzanilla",
        type: "herbal",
        description: "Calma y refresca la piel sensible.",
        ingredients: ["Flores de manzanilla secas", "Agua caliente"],
        preparation: "1. Prepara una infusión con 2 cucharadas de flores de manzanilla en 1 taza de agua caliente.\n2. Deja enfriar y cuela.\n3. Guarda en un frasco limpio en el refrigerador.\n4. Aplica con un algodón sobre el rostro limpio.",
        rating: 0,
        image: "img/60.jpg",
        category: "belleza"
    },
    {
        id: 62,
        name: "Exfoliante de Azúcar Moreno y Miel",
        type: "food",
        description: "Suaviza y exfolia los labios.",
        ingredients: ["Azúcar moreno", "Miel", "Aceite de almendras"],
        preparation: "1. Mezcla 1 cucharada de azúcar moreno con 1 cucharadita de miel y unas gotas de aceite de almendras.\n2. Aplica sobre los labios con movimientos circulares suaves.\n3. Deja actuar durante 1-2 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/61.jpg",
        category: "belleza"
    },
    {
        id: 63,
        name: "Mascarilla de Papaya",
        type: "food",
        description: "Aclara y suaviza la piel.",
        ingredients: ["Papaya madura", "Miel"],
        preparation: "1. Machaca 1/4 de papaya madura.\n2. Mezcla con 1 cucharada de miel.\n3. Aplica sobre el rostro limpio.\n4. Deja actuar durante 15-20 minutos.\n5. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/62.jpg",
        category: "belleza"
    },
    {
        id: 64,
        name: "Acondicionador de Huevo para Cabello",
        type: "food",
        description: "Fortalece y da brillo al cabello.",
        ingredients: ["Huevo", "Aceite de oliva", "Miel"],
        preparation: "1. Bate 1 huevo y mezcla con 2 cucharadas de aceite de oliva y 1 cucharada de miel.\n2. Aplica sobre el cabello húmedo.\n3. Deja actuar durante 20 minutos.\n4. Enjuaga bien con agua fría.",
        rating: 0,
        image: "img/63.jpg",
        category: "belleza"
    },
    {
        id: 65,
        name: "Mascarilla de Arcilla Roja",
        type: "other",
        description: "Purifica y revitaliza la piel grasa.",
        ingredients: ["Arcilla roja en polvo", "Agua de rosas"],
        preparation: "1. Mezcla 2 cucharadas de arcilla roja con agua de rosas hasta formar una pasta.\n2. Aplica sobre el rostro limpio.\n3. Deja actuar durante 10-15 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/64.jpg",
        category: "belleza"
    },
    {
        id: 66,
        name: "Tónico de Té Verde",
        type: "herbal",
        description: "Antioxidante y astringente para la piel.",
        ingredients: ["Té verde", "Agua caliente"],
        preparation: "1. Prepara una infusión fuerte de té verde.\n2. Deja enfriar y cuela.\n3. Guarda en un frasco limpio en el refrigerador.\n4. Aplica con un algodón sobre el rostro limpio.",
        rating: 0,
        image: "img/65.jpg",
        category: "belleza"
    },
    {
        id: 67,
        name: "Mascarilla de Plátano y Miel",
        type: "food",
        description: "Hidrata y nutre la piel seca.",
        ingredients: ["Plátano maduro", "Miel"],
        preparation: "1. Machaca un plátano maduro.\n2. Mezcla con 1 cucharada de miel.\n3. Aplica sobre el rostro limpio.\n4. Deja actuar durante 15-20 minutos.\n5. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/66.jpg",
        category: "belleza"
    },
    {
        id: 68,
        name: "Exfoliante de Sal Marina y Limón",
        type: "food",
        description: "Exfolia y aclara la piel del cuerpo.",
        ingredients: ["Sal marina", "Jugo de limón", "Aceite de oliva"],
        preparation: "1. Mezcla 1/2 taza de sal marina con el jugo de medio limón y 2 cucharadas de aceite de oliva.\n2. Aplica sobre la piel húmeda con movimientos circulares.\n3. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/67.jpg",
        category: "belleza"
    },
    {
        id: 69,
        name: "Mascarilla de Cacao",
        type: "food",
        description: "Antioxidante y nutritiva para la piel.",
        ingredients: ["Cacao en polvo", "Yogur natural", "Miel"],
        preparation: "1. Mezcla 2 cucharadas de cacao en polvo con 2 cucharadas de yogur natural y 1 cucharada de miel.\n2. Aplica sobre el rostro limpio.\n3. Deja actuar durante 15-20 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/68.jpg",
        category: "belleza"
    },
    {
        id: 70,
        name: "Aceite de Ricino para Pestañas",
        type: "other",
        description: "Fortalece y promueve el crecimiento de las pestañas.",
        ingredients: ["Aceite de ricino"],
        preparation: "1. Limpia bien las pestañas.\n2. Aplica una pequeña cantidad de aceite de ricino en las pestañas con un cepillo limpio de rímel.\n3. Deja actuar durante la noche.\n4. Enjuaga por la mañana.",
        rating: 0,
        image: "img/69.jpg",
        category: "belleza"
    },
    {
        id: 71,
        name: "Mascarilla de Aloe Vera",
        type: "herbal",
        description: "Hidrata y calma la piel irritada.",
        ingredients: ["Gel de aloe vera fresco", "Miel"],
        preparation: "1. Extrae el gel de una hoja de aloe vera.\n2. Mezcla 2 cucharadas de gel con 1 cucharadita de miel.\n3. Aplica sobre el rostro limpio.\n4. Deja actuar durante 15-20 minutos.\n5. Enjuaga con agua fría.",
        rating: 0,
        image: "img/70.jpg",
        category: "belleza"
    },
    {
        id: 72,
        name: "Tónico de Agua de Arroz",
        type: "food",
        description: "Suaviza y aclara la piel.",
        ingredients: ["Arroz", "Agua"],
        preparation: "1. Enjuaga 1/2 taza de arroz y cubre con agua.\n2. Deja reposar durante 30 minutos.\n3. Cuela y guarda el agua en un frasco limpio en el refrigerador.\n4. Aplica con un algodón sobre el rostro limpio.",
        rating: 0,
        image: "img/71.jpg",
        category: "belleza"
    },
    {
        id: 73,
        name: "Mascarilla de Fresa",
        type: "food",
        description: "Exfolia suavemente y aporta vitamina C a la piel.",
        ingredients: ["Fresas maduras", "Yogur natural"],
        preparation: "1. Machaca 3-4 fresas maduras.\n2. Mezcla con 2 cucharadas de yogur natural.\n3. Aplica sobre el rostro limpio.\n4. Deja actuar durante 15 minutos.\n5. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/72.jpg",
        category: "belleza"
    },
    {
        id: 74,
        name: "Acondicionador de Mayonesa para Cabello",
        type: "food",
        description: "Hidrata profundamente el cabello seco y dañado.",
        ingredients: ["Mayonesa", "Aceite de oliva"],
        preparation: "1. Mezcla 1/2 taza de mayonesa con 2 cucharadas de aceite de oliva.\n2. Aplica sobre el cabello seco, desde las raíces hasta las puntas.\n3. Cubre con un gorro de ducha y deja actuar durante 30 minutos.\n4. Lava el cabello como de costumbre.",
        rating: 0,
        image: "img/73.jpg",
        category: "belleza"
    },
    {
        id: 75,
        name: "Mascarilla de Carbón Activado",
        type: "other",
        description: "Desintoxica y purifica la piel grasa y con acné.",
        ingredients: ["Carbón activado en polvo", "Agua", "Miel"],
        preparation: "1. Mezcla 1 cucharadita de carbón activado con 1 cucharadita de agua y 1 cucharadita de miel.\n2. Aplica sobre el rostro limpio, evitando el área de los ojos.\n3. Deja actuar durante 10-15 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/74.jpg",
        category: "belleza"
    },

    // Categoría: piel (25 recetas)
    {
        id: 76,
        name: "Crema de Caléndula",
        type: "herbal",
        description: "Calma y suaviza la piel irritada.",
        ingredients: ["Flores de caléndula secas", "Aceite de almendras", "Cera de abeja"],
        preparation: "1. Infunde las flores de caléndula en aceite de almendras durante 2 semanas.\n2. Cuela el aceite y caliéntalo al baño maría con cera de abeja.\n3. Vierte en un frasco limpio y deja enfriar.\n4. Aplica sobre la piel irritada.",
        rating: 0,
        image: "img/75.jpg",
        category: "piel"
    },
    {
        id: 77,
        name: "Gel de Aloe Vera",
        type: "herbal",
        description: "Hidrata y calma quemaduras solares.",
        ingredients: ["Hoja de aloe vera fresca"],
        preparation: "1. Corta una hoja de aloe vera y extrae el gel.\n2. Licúa el gel hasta obtener una consistencia suave.\n3. Guarda en un frasco limpio en el refrigerador.\n4. Aplica sobre la piel afectada.",
        rating: 0,
        image: "img/76.jpg",
        category: "piel"
    },
    {
        id: 78,
        name: "Loción de Avena",
        type: "food",
        description: "Alivia el picor y la irritación de la piel.",
        ingredients: ["Avena en polvo", "Agua"],
        preparation: "1. Mezcla 1/2 taza de avena en polvo con agua hasta formar una pasta suave.\n2. Aplica sobre la piel afectada.\n3. Deja actuar durante 15-20 minutos.\n4. Enjuaga con agua tibia.",
        rating: 0,
        image: "img/77.jpg",
        category: "piel"
    },
]

let currentFilter = "all"

function renderRemedies() {
  const remedyList = document.getElementById("remedyList")
  remedyList.innerHTML = ""

  const filteredRemedies = remedies.filter((remedy) => {
    if (currentFilter === "all") return true
    return remedy.type === currentFilter
  })

  filteredRemedies.forEach((remedy) => {
    const card = document.createElement("div")
    card.className = "remedy-card"
    card.innerHTML = `
            <img src="${remedy.image}" alt="${remedy.name}">
            <div class="remedy-card-content">
                <h2>${remedy.name}</h2>
                <p>${remedy.description}</p>
                <div class="rating">
                    ${generateStars(remedy.rating)}
                </div>
            </div>
        `
    card.addEventListener("click", () => showDetails(remedy))
    remedyList.appendChild(card)
  })
}

function generateStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star ${i <= rating ? "active" : ""}" data-value="${i}">★</span>`
  }
  return stars
}

function showDetails(remedy) {
  const detailsPanel = document.getElementById("detailsPanel")
  const remedyDetails = document.getElementById("remedyDetails")
  const overlay = document.getElementById("overlay")

  const remedyImage = remedyDetails.querySelector(".remedy-image")
  const remedyTitle = remedyDetails.querySelector(".remedy-title")
  const remedyDescription = remedyDetails.querySelector(".remedy-description")
  const ingredientsList = remedyDetails.querySelector(".ingredients ul")
  const preparationList = remedyDetails.querySelector(".preparation ol")
  const ratingDiv = remedyDetails.querySelector(".rating")

  remedyImage.style.backgroundImage = `url(${remedy.image})`
  remedyTitle.textContent = remedy.name
  remedyDescription.textContent = remedy.description

  ingredientsList.innerHTML = remedy.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")

  preparationList.innerHTML = remedy.preparation
    .split("\n")
    .map((step) => `<li>${step.trim()}</li>`)
    .join("")

  ratingDiv.innerHTML = generateStars(remedy.rating)

  detailsPanel.classList.add("visible")
  overlay.classList.add("visible")

  const stars = ratingDiv.querySelectorAll(".star")
  stars.forEach((star) => {
    star.addEventListener("click", () => updateRating(remedy, Number.parseInt(star.dataset.value)))
  })
}

function closeDetails() {
  const detailsPanel = document.getElementById("detailsPanel")
  detailsPanel.classList.remove("visible")
  const overlay = document.getElementById("overlay")
  overlay.classList.remove("visible")
}

function handleOutsideClick(event) {
  const detailsPanel = document.getElementById("detailsPanel")
  const modalContent = document.querySelector(".modal-content")
  if (event.target === detailsPanel && !modalContent.contains(event.target)) {
    closeDetails()
  }
}

function updateRating(remedy, newRating) {
  remedy.rating = newRating
  renderRemedies()
  showDetails(remedy)
}

document.getElementById("showAll").addEventListener("click", () => {
  currentFilter = "all"
  renderRemedies()
})

document.getElementById("showHerbal").addEventListener("click", () => {
  currentFilter = "herbal"
  renderRemedies()
})

document.getElementById("showFood").addEventListener("click", () => {
  currentFilter = "food"
  renderRemedies()
})

document.getElementById("showOther").addEventListener("click", () => {
  currentFilter = "other"
  renderRemedies()
})

document.getElementById("closeDetails").addEventListener("click", closeDetails)
document.addEventListener("click", handleOutsideClick)

document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()
  const filteredRemedies = remedies.filter(
    (remedy) => remedy.name.toLowerCase().includes(searchTerm) || remedy.description.toLowerCase().includes(searchTerm),
  )
  renderFilteredRemedies(filteredRemedies)
})

function renderFilteredRemedies(filteredRemedies) {
  const remedyList = document.getElementById("remedyList")
  remedyList.innerHTML = ""

  filteredRemedies.forEach((remedy) => {
    const card = document.createElement("div")
    card.className = "remedy-card"
    card.innerHTML = `
            <img src="${remedy.image}" alt="${remedy.name}">
            <div class="remedy-card-content">
                <h2>${remedy.name}</h2>
                <p>${remedy.description}</p>
                <div class="rating">
                    ${generateStars(remedy.rating)}
                </div>
            </div>
        `
    card.addEventListener("click", () => showDetails(remedy))
    remedyList.appendChild(card)
  })
}

function renderCategories() {
  const categoryList = document.getElementById("categoryList")
  const categories = [...new Set(remedies.map((remedy) => remedy.category))]

  categories.forEach((category) => {
    const li = document.createElement("li")
    li.textContent = category.charAt(0).toUpperCase() + category.slice(1)
    li.className = "category-item"
    li.addEventListener("click", () => {
      document.querySelectorAll(".category-item").forEach((item) => item.classList.remove("active"))
      li.classList.add("active")
      filterByCategory(category)
    })
    categoryList.appendChild(li)
  })
}

function filterByCategory(category) {
  const filteredRemedies = remedies.filter((remedy) => remedy.category === category)
  renderFilteredRemedies(filteredRemedies)
  document.getElementById("searchInput").value = ""
}

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("¡Gracias por suscribirte a nuestro boletín!")
  e.target.reset()
})

window.addEventListener("load", () => {
  renderRemedies()
  renderCategories()
})

