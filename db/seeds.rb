HOBBIES = [
  "Running",
  "Swimming",
  "Napping",
  "Cuddling",
  "Eating",
  "Sunbathing",
  "Flying",
  "Long Walks",
  "Fetch",
  "Kissing",
  "Chasing",
  "People Watching",
  "Stalking",
  "Grooming"
]

HOBBY_IDS = HOBBIES.map.with_index{ |hobby, i| (i + 1).to_s }

HOBBIES.each do |hobby|
  Hobby.create!(name: hobby)
end

def random_type
  User::ANIMAL_TYPES[rand(User::ANIMAL_TYPES.length)]
end

def random_state
  User::STATES[rand(50)]
end

def random_month
  rand(12) + 1
end

def random_day
  rand(28) + 1
end

def random_year
  rand(31) + 1984
end

def random_gender
  ["M", "F"][rand(2)]
end

def random_hobbies
  random_ids = []
  hobby_ids = HOBBY_IDS.dup
  hobby_amt = rand(HOBBY_IDS.length + 1)

  hobby_amt.times do
    hobby_ids.shuffle!
    random_ids << hobby_ids.pop
  end

  random_ids
end

def save_pictures(username, image_path)
  User
    .find_by_username(username)
    .pictures
    .create(image_url: "https://res.cloudinary.com/dfvpir1ro/image/upload/h_440/#{image_path}",
            thumb_url: "https://res.cloudinary.com/dfvpir1ro/image/upload/h_160/#{image_path}")
end

User.create(
  username: "drogon",
  password: "password",
  gender: "M",
  birthdate: Time.new(2011, 6, 19),
  city: "Westeros",
  state: "Florida",
  animal_type: "dragon",
  website: "http://gameofthrones.wikia.com/wiki/Drogon",
  instagram: "https://instagram.com/gameofthrones/",
  about_me: "My mom's a hottie, right? Right? She can be annoying though. She wasn't going to sign me up for this site, so I did it myself. I'm the oldest, so I'll do whatever I want. Jk, I love my mom.",
  hobby_ids: ["5", "6", "7", "8"]
)
save_pictures("drogon", "v1434620348/dvzwqz0emdf5tkcteqar.jpg")
save_pictures("drogon", "v1434620352/goc0t6fibligpny5vgjl.png")
save_pictures("drogon", "v1434620350/v3dljccz9lxcnaxrgpa6.png")
save_pictures("drogon", "v1434620348/hmlwkdonpi4egzvmc3hm.jpg")
save_pictures("drogon", 'v1434620348/sl4n1sfgoeomspq70zgv.jpg')

User.create(
  username: "charley",
  password: "password",
  gender: "M",
  birthdate: Time.new(2013, 3, 18),
  city: "San Francisco",
  state: "California",
  animal_type: "dog",
  breed: "Retriever, Labrador Mix",
  website: "https://www.sfspca.org/adoptions/pet-details/20818764",
  about_me: "Charley needs a family! He's a big boy with a goofy smile and would love a human to play with to his heart's content.",
  hobby_ids: ["1", "4", "9", "11"]
)
save_pictures("charley", "v1434621458/jsbmrnimgnzwjxptx8kh.jpg")
save_pictures("charley", "v1434621457/xi9atb5drn4906jg5sxi.jpg")
save_pictures("charley", "v1434621458/jeptv5duokogt9q7hugt.jpg")

User.create(
  username: "hugo",
  password: "password",
  gender: "M",
  birthdate: Time.new(2013, 8, 1),
  city: "San Jose",
  state: "California",
  animal_type: "dog",
  breed: "Pug",
  instagram: "https://instagram.com/_hugothepug",
  about_me: "His favorite things are his toy duckie and cuddling with mommy and daddy! Often looks confused, but always fun to dress up!",
  hobby_ids: ["3", "4", "9", "10", "12"]
)
save_pictures("hugo", "v1434622459/r0jfspssujtgaahaiivk.jpg")
save_pictures("hugo", "v1434622459/i8dacubp2o0owl9speir.jpg")
save_pictures("hugo", "v1434622459/qjpwk0w3daw4ifuiging.jpg")
save_pictures("hugo", "v1434622459/b13qposywpgyikqgfgia.jpg")
save_pictures("hugo", "v1434622460/sq2vxts84cbnkaaym2zr.jpg")

User.create(
  username: "teddy",
  password: "password",
  gender: "M",
  birthdate: Time.new(2012, 8, 13),
  city: "Boston",
  state: "Massachusetts",
  animal_type: "cat",
  breed: "Jerk",
  website: "https://www.youtube.com/watch?v=b_mVb-G1v1I",
  about_me: "They say black cats are bad luck. Teddy is just bad.",
  hobby_ids: ["3", "6", "13"]
)
save_pictures("teddy", "v1434622919/vme5k51w6s49gfppcla4.jpg")
save_pictures("teddy", "v1434622919/ukh2fs6q8yrme20x11he.jpg")
save_pictures("teddy", "v1434622919/rt4x0ykqxk0drapyogbv.jpg")

User.create(
  username: "pumbaa",
  password: "password",
  gender: "M",
  birthdate: Time.new(2012, 9, 4),
  city: "San Francisco",
  state: "California",
  animal_type: "dog",
  breed: "Bulldog",
  about_me: "He's brought such joy to our lives...when he's not sleeping. Or farting in his sleep.",
  hobby_ids: ["3", "5", "9", "12"]
)
save_pictures("pumbaa", "v1435044417/jmmj5fowcjqllyngeua0.png")
save_pictures("pumbaa", "v1434624281/hfqrao2gl6h8xybnqefk.jpg")
save_pictures("pumbaa", "v1434623871/uwwef5onghreigrp3x3b.jpg")
save_pictures("pumbaa", "v1434624281/obgzoqvcye6dazo67i5i.jpg")
save_pictures("pumbaa", "v1434624281/mpdnnx0lumeavcrqpmmp.jpg")
save_pictures("pumbaa", "v1434623871/vqjpnoo1mcx6xulcx9l9.jpg")
save_pictures("pumbaa", "v1434623871/gphyeg7tygifzsleivaz.jpg")
save_pictures("pumbaa", "v1434623872/onhhjbxb1bpw66jzllob.jpg")
save_pictures("pumbaa", "v1434624281/tibt1lmkypfeixy0qxdk.jpg")
save_pictures("pumbaa", "v1434623871/vgp6sxvbebrx0czdeokj.jpg")
save_pictures("pumbaa", "v1434623871/n6yjnw1a7ope4umvanjy.jpg")

User.create(
  username: "piopi",
  password: "password",
  gender: "F",
  birthdate: Time.new(2009, 10, 12),
  city: "San Jose",
  state: "California",
  animal_type: "dog",
  breed: "Yorkie",
  about_me: "Piopi's adorable. So is my son. I'm not sure who I'm actually showcasing here. Oh well, double the cuteness! Proceed to melt!",
  hobby_ids: ["4", "10", "14"]
)
save_pictures("piopi", "v1434705097/tafmb2glbfe6crug8y0a.jpg")
save_pictures("piopi", "v1434705097/psta5pkykwouso54soz2.jpg")
save_pictures("piopi", "v1434705424/clhmg510szen3ib9xwli.jpg")
save_pictures("piopi", "v1434705098/fspjinq5biiagf3f8g7l.jpg")
save_pictures("piopi", "v1434705097/xje2jlozkzovhbjm6ot1.jpg")
save_pictures("piopi", "v1434705097/gw6c2gymp9rqqijosdqc.jpg")

User.create(
  username: "baiyun",
  password: "password",
  gender: "F",
  birthdate: Time.new(1991, 9, 7),
  city: "San Diego",
  state: "California",
  animal_type: "panda",
  breed: "giant panda",
  website: "https://en.wikipedia.org/wiki/Bai_Yun",
  about_me: "Bai Yun, meaning White Cloud in Chinese, has birthed 6 cubs. Considered the most surviving pandas at a breeding facility outside of China.",
  hobby_ids: ["3", "4", "5"]
)
save_pictures("baiyun", "v1434706393/iju3tntqnfqpfrgz0lzh.jpg")
save_pictures("baiyun", "v1434706393/t70lzxcntk4i5vvcb3qa.jpg")
save_pictures("baiyun", "v1434706393/iqlwipnrbgt6kmlmrmye.jpg")
save_pictures("baiyun", "v1434706393/e8g3e3bnnaik5kburera.jpg")
save_pictures("baiyun", "v1434706393/yimzbfdp7uypusbhlvxb.jpg")

User.create(
  username: "charliesheen",
  password: "password",
  gender: "M",
  birthdate: Time.new(1965, 9, 3),
  city: "Beverly Hills",
  state: "California",
  animal_type: "other",
  breed: "winner",
  website: "http://www.charliesheen.com/",
  instagram: "https://instagram.com/charliesheen/",
  about_me: "What am I doing here? I've decided to expand my winning to the animal kingdom as well. Duh!"
)
save_pictures("charliesheen", "v1434708390/zqxjb57hnmm3j6jcbyoe.jpg")
save_pictures("charliesheen", "v1434708390/kldsohriu7p2dskijbor.jpg")
save_pictures("charliesheen", "v1434708390/opxcvz6otztbmg7pmcpv.jpg")

User.create(
  username: "pocky",
  password: "password",
  gender: "M",
  birthdate: Time.new(2014, 3, 1),
  city: "Oakland",
  state: "California",
  animal_type: "dog",
  breed: "Miniature Poodle",
  instagram: "https://instagram.com/pocky_nguyen",
  about_me: "He loves to run marathons, but most of all, he's such an obedient boy! Check out his instagram for more pics of stuff on his head.",
  hobby_ids: ["1", "4", "6", "8", "9", "11", "14"]
)
save_pictures("pocky", "v1434874672/moap8cqkxitly7ynr4b2.png")
save_pictures("pocky", "v1434874676/xbmxhn8rvxyoy0fz26p0.png")
save_pictures("pocky", "v1434874715/kpxwhxfm84lb8p9wzhle.png")
save_pictures("pocky", "v1434874680/on2xfkkr9xao2njk0boo.png")
save_pictures("pocky", "v1434874679/dbvvchrsueknzy0btsm9.png")
save_pictures("pocky", "v1434874676/lbx4jwkag1j16shuqwfn.png")
save_pictures("pocky", "v1434874676/mebiicq5j1oywdifzvgw.png")
save_pictures("pocky", "v1434874674/hpvqranaqa0ufzmotkhk.png")

User.create(
  username: "grumpycat",
  password: "password",
  gender: "F",
  birthdate: Time.new(2012, 4, 4),
  city: "Morristown",
  state: "Arizona",
  animal_type: "cat",
  breed: "mixed",
  website: "https://www.facebook.com/TheOfficialGrumpyCat",
  instagram: "https://instagram.com/RealGrumpyCat",
  about_me: "Her real name is Tardar Sauce. Dwarfs Grumpy of the Seven Dwarves' grumpiness. Don't laugh in her presence. It makes her grumpier."
)
save_pictures("grumpycat", "v1434915328/gra1s4opqfsyluuxclsc.png")
save_pictures("grumpycat", "v1434915327/utdjuq3uh3jzhwvdjjob.png")
save_pictures("grumpycat", "v1434915327/uaphgc9ajejfvcqeioi0.png")
save_pictures("grumpycat", "v1434915335/p0anumi3rog7n8znch34.png")
save_pictures("grumpycat", "v1434915340/j598kfsyrtqay4p2dh3k.png")
save_pictures("grumpycat", "v1434915334/pwg8quak3spbydol1f0w.png")
save_pictures("grumpycat", "v1434915333/bfrtx2ao44ixih9q1bys.png")

User.create(
  username: "akuma",
  password: "password",
  gender: "M",
  birthdate: Time.new(2010, 6, 5),
  city: "San Jose",
  state: "California",
  animal_type: "dog",
  breed: "Shiba Inu",
  instagram: "https://instagram.com/akumatime",
  about_me: "Such a handsome boy. Also, you'd think he's a cat by how solemn he is all the time. Plus side is, he's not too needy!",
  hobby_ids: ["1", "3", "6", "8", "9", "11", "12"]
)
save_pictures("akuma", "v1434875667/uawom9qoblbltv9eqfep.png")
save_pictures("akuma", "v1434875661/y7xjnju2yows62ke2yso.png")
save_pictures("akuma", "v1434875666/c7e05n1bhs9myegqg9kn.png")
save_pictures("akuma", "v1434875666/n69y22sjttlu1zldg39p.png")
save_pictures("akuma", "v1434875661/v4r3jp5rvgy1hr6urjzb.png")

User.create(
  username: "shadowfax",
  password: "password",
  gender: "M",
  birthdate: Time.new(1989, 4, 10),
  city: "Louisville",
  state: "Kentucky",
  animal_type: "other",
  breed: "horse, of the race of the Mearas",
  website: "http://lotr.wikia.com/wiki/Shadowfax",
  about_me: "He is the lord of all horses and has been my friend through many dangers.",
  hobby_ids: ["1", "11"]
)
save_pictures("shadowfax", "v1434877578/mkh0k0qdsioe18olmj3f.jpg")
save_pictures("shadowfax", "v1434877581/zsh56t6yakazarsx3ylr.jpg")
save_pictures("shadowfax", "v1434877578/hxk2wfrqvet6dunjm9w5.jpg")
save_pictures("shadowfax", "v1434877586/wyzweqltrs3zk5qt2knr.gif")

User.create(
  username: "bobby",
  password: "password",
  gender: "M",
  birthdate: Time.new(2007, 3, 21),
  city: "Campbell",
  state: "California",
  animal_type: "dog",
  breed: "beagle",
  instagram: "https://instagram.com/bobbythebeagle/",
  about_me: "Saw this boy when he was about a week old, and it was love at first sight. He's the handsomest beagle ever! Look at his colors! He used to be a ball of energy when he was a puppy, but now he enjoys napping anywhere warm and soft and watching me do chores.",
  hobby_ids: ["3", "4", "5", "6", "9", "12"]
)
save_pictures("bobby", "v1434909495/rsijhhnpswzmst3anpji.png")
save_pictures("bobby", "v1434909475/oyl2l2ddskcnjbhp9azl.jpg")
save_pictures("bobby", "v1434909494/zf6uczpoh5mxd3w3lagh.png")
save_pictures("bobby", "v1434909492/w8gq4z89zw2y4qe9grpp.png")
save_pictures("bobby", "v1434909494/cmdasylhveucw6tjpkja.png")
save_pictures("bobby", "v1434909491/l5w5jmfurx0z21racnnp.png")
save_pictures("bobby", "v1434909486/wlndhzo1sqx9zvhu4ceu.png")

User.create(
  username: "boo",
  password: "password",
  gender: "M",
  birthdate: Time.new(2006, 3, 16),
  city: "San Francisco",
  state: "California",
  animal_type: "dog",
  breed: "Pomeranian",
  website: "https://www.facebook.com/Boo",
  instagram: "https://instagram.com/buddyboowaggytails/",
  about_me: "Life is good when you're the cutest dog in the world. Now partnered with Buddy and Blue to take over the world. See them on instagram!",
  hobby_ids: ["3", "4", "5", "6", "10", "14"]
)
save_pictures("boo", "v1434911918/wmgoonfipoydopujvj6o.png")
save_pictures("boo", "v1434911917/wqpstulalsnazzkgsv8n.png")
save_pictures("boo", "v1434911917/bgke0xqq4zvskkfvnsyx.png")
save_pictures("boo", "v1434911913/w1agjztjoqslzv71q1bt.png")
save_pictures("boo", "v1434911918/wn5b7goz6kebitbqriq8.png")
save_pictures("boo", "v1434911916/dnqofdpeyjfl188erk3m.png")
save_pictures("boo", "v1434912495/c8z6ry53lteiiaayo2u1.png")
save_pictures("boo", "v1434912472/ggaeprt6psa3gtb2u2t7.png")
save_pictures("boo", "v1434912472/kpeockan5x59oqtipwth.png")

User.create(
  username: "zuri",
  password: "password",
  gender: "F",
  birthdate: Time.new(2013, 2, 16),
  city: "Pleasanton",
  state: "California",
  animal_type: "hedgehog",
  about_me: "Prickly but sweet. Just don't use her as a seat.",
  hobby_ids: ["3", "4", "10"]
)
save_pictures("zuri", "v1434914355/cd5k1whtodjmyrllj1x4.png")
save_pictures("zuri", "v1434914356/hrj3auqjjf5me5ez9my3.png")
save_pictures("zuri", "v1434914354/arlzqibfjbpuf8w8o88b.png")
save_pictures("zuri", "v1434914354/lzglngc5aphky1ry61c4.png")
save_pictures("zuri", "v1434914360/ckkpojwbkfrugwkp3sy8.png")

User.create(
  username: "nala",
  password: "password",
  gender: "F",
  birthdate: Time.new(2010, 6, 24),
  city: "Los Angeles",
  state: "California",
  animal_type: "cat",
  breed: "Siamese and Tabby mix",
  website: "https://www.facebook.com/pages/Nala_cat/303371839754315",
  instagram: "https://instagram.com/nala_cat",
  about_me: "She came from a house with too many cats and was sheltered. The day I met her I knew it was meant to be. Cherish your pets and provide them with happy homes for the rest of their lives!"
)
save_pictures("nala", "v1434916977/tiuc0eundb5bo4dlhobe.png")
save_pictures("nala", "v1434916968/ndx24uz4xdixdttya19f.png")
save_pictures("nala", "v1434916988/updqktu1myqlkckrom9p.png")
save_pictures("nala", "v1434916989/hrm0fjqlevlsxe5sj1i8.png")
save_pictures("nala", "v1434916978/je2jskaa4opowuxg1ken.png")
save_pictures("nala", "v1434916991/g1ra9c0oxhlscjymhtzf.png")
save_pictures("nala", "v1434916978/saeypl8z73ia5jd2zka5.png")
save_pictures("nala", "v1434916990/mqvitoblmwvaaeflvehg.png")

User.create(
  username: "brutus",
  password: "password",
  gender: "M",
  birthdate: Time.new(2002, 1, 14),
  city: "Bozeman",
  state: "Montana",
  animal_type: "bear",
  breed: "grizzly",
  about_me: "The Man/Bear bromance is real. Love him so much that I made him my best man at my wedding!",
  hobby_ids: ["2", "4", "5", "8"]
)
save_pictures("brutus", "v1434918897/wnbryyaimllionval02h.png")
save_pictures("brutus", "v1434918899/dk7bo8y2ttpxjv8nowk8.png")
save_pictures("brutus", "v1434918895/jhtvurwmezxyxlxdecwk.png")
save_pictures("brutus", "v1434918891/xw9ywyup4hiilqacvsyp.png")
save_pictures("brutus", "v1434918899/qv8gswmsszxcb4lodokx.png")
save_pictures("brutus", "v1434918887/dzr8jc0ugli8laxt1acw.png")
save_pictures("brutus", "v1434918896/ev8nrsbsczf2o1cqjil8.png")
save_pictures("brutus", "v1434918901/hrfhqzppnbyzqq1qjwjt.png")

User.create(
  username: "twinkie",
  password: "password",
  gender: "F",
  birthdate: Time.new(2008, 4, 4),
  city: "South San Francisco",
  state: "California",
  animal_type: "dog",
  about_me: "Best dog evar.",
  hobby_ids: ["3", "4", "6", "8", "10"]
)
save_pictures("twinkie", "v1434928344/p7zrkok5z9zufihlha42.jpg")
save_pictures("twinkie", "v1434928343/rruyin5yhhmd8ncldo4b.jpg")
save_pictures("twinkie", "v1434928343/iwbntqkkmpmkummkh4ik.jpg")
save_pictures("twinkie", "v1434928344/lnvaqxrhgc2w0izp3cny.jpg")
save_pictures("twinkie", "v1434928344/djvi3rivrmevnkkxhsju.jpg")

User.create(
  username: "pumpernickel",
  password: "password",
  gender: "F",
  birthdate: Time.new(2015, 4, 20),
  city: "San Francisco",
  state: "California",
  animal_type: "cat",
  about_me: "New kittens at the SF SPCA! She's a curious kitten looking for adopters. She's ready for a home with snuggles, playtime, and lots of kitten-love!",
  website: "https://www.sfspca.org/adoptions/pet-details/28016107",
  hobby_ids: ["4"]
)
save_pictures("pumpernickel", "v1435042715/euxzui5wr9wj4uusxaji.jpg")
save_pictures("pumpernickel", "v1435042715/rg2rzvcgkul2zveoazre.jpg")

User.create(
  username: "hammy",
  password: "password",
  gender: "F",
  birthdate: Time.new(2014, 10, 18),
  city: "New York City",
  state: "New York",
  animal_type: "hamster",
  instagram: "https://instagram.com/hamster_lover25",
  hobby_ids: ["1", "5"]
)
save_pictures("hammy", "v1435043764/rmvde4oodlp4hccfbk55.png")
save_pictures("hammy", "v1435043764/fexyj36r0j5ohm0whxuw.png")
save_pictures("hammy", "v1435043764/ekgb11vku4rlfskzb1fk.png")
save_pictures("hammy", "v1435043764/lncypquwhnm6lnikmtih.png")
save_pictures("hammy", "v1435043765/heuo3abpclarycy62xub.png")

User.create(
  username: "luna",
  password: "password",
  gender: "F",
  birthdate: Time.new(2011, 7, 14),
  city: "Milpitas",
  state: "California",
  animal_type: "dog",
  breed: "Siberian Husky",
  about_me: "Her beautiful blue eyes are entrancing!",
  hobby_ids: ["1", "4", "5", "9", "12"]
)
save_pictures("luna", "v1435045310/wrwslmuovekdgznfrqtf.png")
save_pictures("luna", "v1435045311/v288zj6qudxfrq3nckhb.png")
save_pictures("luna", "v1435045310/bqqz4sqvegi8qsifblcn.png")
save_pictures("luna", "v1435045310/wkgedqmwzxdj88zwkkeq.png")
save_pictures("luna", "v1435045310/qadr5adpuaxo15sqgwah.png")
save_pictures("luna", "v1435045310/zvztqawrmt4qy3k4z6h0.png")
save_pictures("luna", "v1435045309/zx9tojiys6bpwni4jbxr.png")
save_pictures("luna", "v1435045311/c8keoefzkoughocyavyz.png")

User.create(
  username: "rush",
  password: "password",
  gender: "M",
  birthdate: Time.new(2013, 5, 12),
  city: "San Jose",
  state: "California",
  animal_type: "dog",
  breed: "German Shepherd",
  about_me: "The drool is a little excessive, but he's becoming a great guard dog! Training is so important at a young age.",
  instagram: "https://instagram.com/explore/tags/rushthegsd/",
  hobby_ids: ["1", "5", "9", "11", "12"]
)
save_pictures("rush", "v1435046158/vxbh2t8li6bf4qoxnn1k.png")
save_pictures("rush", "v1435046158/abmlz4fyvg4l1mestxdr.png")
save_pictures("rush", "v1435046158/lwityogmztopscwrxmus.png")
save_pictures("rush", "v1435046159/o1wemup59jsptsgrjhah.png")
save_pictures("rush", "v1435046160/aypv1u27ah7fw11sliov.png")
save_pictures("rush", "v1435046159/jcsjhvnq13mudxlyvmru.png")
save_pictures("rush", "v1435046160/clm8onwl9xakp6hlppui.png")
save_pictures("rush", "v1435046161/itueea318ybykvyu6rzu.png")

User.create(
  username: "chowder",
  password: "password",
  gender: "M",
  birthdate: Time.new(2014, 4, 29),
  city: "Los Angeles",
  state: "California",
  animal_type: "dog",
  breed: "French Bulldog",
  about_me: "IS HE NOT ADORABLE???",
  instagram: "https://instagram.com/callmechowder/"
)
save_pictures("chowder", "v1435049974/an2slugk7cj3o4k3cenm.png")
save_pictures("chowder", "v1435049974/hxkxhimryjnw1ttlhvfa.png")
save_pictures("chowder", "v1435049974/tgttvf9zb82mehfmlgeh.png")
save_pictures("chowder", "v1435049973/fraeb8obyuxehrwfurxp.png")
save_pictures("chowder", "v1435049974/o3ibrwp7vv5nyzseawjp.png")
save_pictures("chowder", "v1435049978/w4ae6yc6sp6v6oyo23ih.png")
save_pictures("chowder", "v1435049977/agalx9jnk8mmp5ds7jop.png")
save_pictures("chowder", "v1435049976/y2uzfswuokfo6brzij6b.png")
save_pictures("chowder", "v1435049976/b5fffwal6hnvmuahxwul.png")

User.create(
  username: "sputnikandspock",
  password: "password",
  gender: "M",
  birthdate: Time.new(2014, 12, 29),
  city: "San Francisco",
  state: "California",
  animal_type: "rabbit",
  about_me: "An inseparable duo. Adopt today!",
  website: "http://saveabunny.org/rabbit/sputnik-and-spock-0"
)
save_pictures("sputnikandspock", "v1435050696/ofli9doa5bkux7l28ydu.jpg")
save_pictures("sputnikandspock", "v1435050696/pljwya4akn3p4kijmc5j.jpg")
save_pictures("sputnikandspock", "v1435050696/prw3mtslcpmopitkqjrt.jpg")
save_pictures("sputnikandspock", "v1435050696/pp1npajt3pav5tucazj4.jpg")

User.create(
  username: "booboo",
  password: "password",
  gender: "F",
  birthdate: Time.new(2014, 2, 23),
  city: "Seattle",
  state: "Washington",
  animal_type: "pig",
  breed: "guinea (I know I know, it's not a pig)",
  about_me: "She's hilariously amusing to photograph.",
  instagram: "https://instagram.com/boobooandfriends/"
)
save_pictures("booboo", "v1435051671/mjrmkr6quupdhoezvwhu.png")
save_pictures("booboo", "v1435051668/j0jiftiao3vt1atrl1rc.png")
save_pictures("booboo", "v1435051668/ct5ul0s8hmd9sswsfpv8.png")
save_pictures("booboo", "v1435051671/gdcjans8irdltnbfkws0.png")
save_pictures("booboo", "v1435051669/f9wxbxia0lk3bdz1hnq8.png")
save_pictures("booboo", "v1435051668/wrcorhpey557eww5wvc7.png")
save_pictures("booboo", "v1435051671/we1qvxy5y4vwoknpu0rm.png")

User.create(
  username: "boots",
  password: "password",
  gender: "M",
  birthdate: Time.new(2014, 6, 23),
  city: "San Francisco",
  state: "California",
  animal_type: "dog",
  about_me: "Cutie in boots.",
  website: "http://cuteorboot.us",
  hobby_ids: ["1", "3", "4", "12"]
)
save_pictures("boots", "v1434587074/e0v8ffuuw7aau11iqltd.jpg")

User.create(
  username: "scruffy",
  password: "password",
  gender: "M",
  birthdate: Time.new(2014, 12, 31),
  city: "Denver",
  state: "Colorado",
  animal_type: "dog",
  about_me: "Scruffy McScrufferson, so scruffy he is.",
  website: "http://cuteorboot.us",
  hobby_ids: ["5", "11"]
)
save_pictures("scruffy", "v1435214393/u96pn46klabgsajqyj7u.jpg")

User.create(
  username: "fry",
  password: "password",
  gender: "M",
  birthdate: Time.new(2014, 12, 31),
  city: "New Orleans",
  state: "Louisiana",
  animal_type: "dog",
  about_me: "Small with a big attitude",
  website: "http://cuteorboot.us",
  hobby_ids: ["5", "11"]
)
save_pictures("fry", "v1434143919/znqyu6ude0rdekxuliyr.jpg")

User.create(
  username: "whiskers",
  password: "password",
  gender: "F",
  birthdate: Time.new(2014, 12, 31),
  city: "Sacramento",
  state: "California",
  animal_type: "cat",
  about_me: "She's a sneaky one.",
  website: "http://cuteorboot.us",
  hobby_ids: ["5", "11"]
)
save_pictures("whiskers", "v1435214988/plr8xjzpf8bcgbk48uy1.jpg")

def random_vote
  rand(3).zero? ? 0 : 1
end

(1..29).each do |votee_id|
  (1..25).each do |voter_id|
    next if votee_id == voter_id
    next if rand(3) == 1

    User
      .find(votee_id)
      .received_votes
      .create(voter_id: voter_id, value: random_vote)
  end
end

if Rails.env == "development"
  50.times do |i|
    name = Faker::Internet.user_name
    url = Faker::Internet.url("www.facebook.com", "/#{name}")

    User.create(
      username: name,
      password: "password",
      gender: random_gender,
      birthdate: Time.new(random_year, random_month, random_day),
      city: Faker::Address.city,
      state: random_state,
      animal_type: random_type,
      breed: "breed",
      website: url,
      instagram: "https://instagram.com/#{name}",
      about_me: "I'm #{name}",
      hobby_ids: random_hobbies
    )
  end

  (27..50).each do |votee_id|
    (27..50).each do |voter_id|
      next if votee_id == voter_id
      next if rand(3) == 1

      User
        .find(votee_id)
        .received_votes
        .create(voter_id: voter_id, value: rand(2))
    end
  end
end
