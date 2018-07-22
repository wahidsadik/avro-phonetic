var equal = require('chai').assert.equal;

var avroPhonetic = require("../src/avro-phonetic");

/*
TODO: Consider organizing the tests into more logical groups

Example:
    - Tests involving space
    - Tests involving ^
    - Tests involving `
    - Tests involving double consonent in Bangla
    - Tests involving vowel+consonent in Bangla
    - ??

TODO: Visit wikipedia Bangla alphabets and cover missings tests, if any
    - https://en.wikipedia.org/wiki/Bengali_alphabet
    - https://en.wikipedia.org/wiki/Bengali_(Unicode_block)
*/
 
/*
Test group strategy:
- Original test ordered tests in terms of Bangla-letter order, but no rigoriously followed. This approach allowed to cover most English letter combinations for a desired Bangla letters.
- I've taken a different approach. I've ordered the tests grouped in some logical order (from developer point of view and primarily English to Bangla order). My approach not perfect either. I will have to keep a catch-all group for things that I am not able to find a better grouping.
*/
describe("avroPhonetic", function() {
    describe("parse(): escape character", function() {
        it("1 english character => no mapping", function() {
            equal(avroPhonetic.parse("`"), "");
        });
    });

    describe("parse(): same mapping", function() {
        it("1 english character => same", function() {
            equal(avroPhonetic.parse("~"), "~");
            equal(avroPhonetic.parse("!"), "!");
            equal(avroPhonetic.parse("@"), "@");
            equal(avroPhonetic.parse("#"), "#");
            equal(avroPhonetic.parse("%"), "%");
            equal(avroPhonetic.parse("&"), "&");
            equal(avroPhonetic.parse("*"), "*");
            equal(avroPhonetic.parse("-"), "-");
            equal(avroPhonetic.parse("_"), "_");
            equal(avroPhonetic.parse("+"), "+");
            equal(avroPhonetic.parse("="), "=");

            equal(avroPhonetic.parse("("), "(");
            equal(avroPhonetic.parse(")"), ")");
            equal(avroPhonetic.parse("{"), "{");
            equal(avroPhonetic.parse("}"), "}");
            equal(avroPhonetic.parse("["), "[");
            equal(avroPhonetic.parse("]"), "]");
            equal(avroPhonetic.parse("<"), "<");
            equal(avroPhonetic.parse(">"), ">");

            equal(avroPhonetic.parse(";"), ";");
            equal(avroPhonetic.parse("'"), "'");

            equal(avroPhonetic.parse(","), ",");
            equal(avroPhonetic.parse("?"), "?");
            equal(avroPhonetic.parse("|"), "|");

            equal(avroPhonetic.parse("\""), "\"");
            equal(avroPhonetic.parse("/"), "/");
        });
    });

    describe("parse(): vowel - standalone", function() {
        it("vowel - standalone", function() {
            equal(avroPhonetic.parse("o"), "অ");

            equal(avroPhonetic.parse("a"), "আ");
            equal(avroPhonetic.parse("A"), "আ");

            equal(avroPhonetic.parse("i"), "ই");

            equal(avroPhonetic.parse("I"), "ঈ");
            equal(avroPhonetic.parse("EE"), "ঈ");
            equal(avroPhonetic.parse("ee"), "ঈ");
            equal(avroPhonetic.parse("Ee"), "ঈ");
            equal(avroPhonetic.parse("eE"), "ঈ");

            equal(avroPhonetic.parse("u"), "উ");
            equal(avroPhonetic.parse("oo"), "উ");

            equal(avroPhonetic.parse("U"), "ঊ");

            equal(avroPhonetic.parse("rri"), "ঋ");

            equal(avroPhonetic.parse("e"), "এ");
            equal(avroPhonetic.parse("E"), "এ");

            equal(avroPhonetic.parse("OI"), "ঐ");

            equal(avroPhonetic.parse("O"), "ও");
            equal(avroPhonetic.parse("w"), "ও");
            equal(avroPhonetic.parse("W"), "ও");

            equal(avroPhonetic.parse("OU"), "ঔ");
        });
    });

    describe("parse(): vowel - signs", function() {
        it("vowel - signs", function() {
            equal(avroPhonetic.parse("a`"), "া");
            equal(avroPhonetic.parse("A`"), "া");

            equal(avroPhonetic.parse("i`"), "ি");

            equal(avroPhonetic.parse("I`"), "ী");
            equal(avroPhonetic.parse("ee`"), "ী");

            equal(avroPhonetic.parse("u`"), "ু");
            equal(avroPhonetic.parse("oo`"), "ু");

            equal(avroPhonetic.parse("U`"), "ূ");

            equal(avroPhonetic.parse("rri`"), "ৃ");

            equal(avroPhonetic.parse("e`"), "ে");
            equal(avroPhonetic.parse("E`"), "ে");

            equal(avroPhonetic.parse("OI`"), "ৈ");

            equal(avroPhonetic.parse("O`"), "ো");

            equal(avroPhonetic.parse("OU`"), "ৌ");

        });
    });

    describe("parse(): consonents - standalone", function() {
        it("consonents - consonents", function() {
            equal(avroPhonetic.parse("k"), "ক");
            equal(avroPhonetic.parse("K"), "ক");
            equal(avroPhonetic.parse("Q"), "ক");
            equal(avroPhonetic.parse("q"), "ক");

            equal(avroPhonetic.parse("kh"), "খ");

            equal(avroPhonetic.parse("g"), "গ");
            equal(avroPhonetic.parse("G"), "গ");

            equal(avroPhonetic.parse("gh"), "ঘ");

            equal(avroPhonetic.parse("Ng"), "ঙ");


            equal(avroPhonetic.parse("c"), "চ");
            equal(avroPhonetic.parse("C"), "চ");

            equal(avroPhonetic.parse("ch"), "ছ");
            equal(avroPhonetic.parse("Ch"), "ছ");

            equal(avroPhonetic.parse("j"), "জ");
            equal(avroPhonetic.parse("J"), "জ");

            equal(avroPhonetic.parse("jh"), "ঝ");

            equal(avroPhonetic.parse("NG"), "ঞ");


            equal(avroPhonetic.parse("T"), "ট");

            equal(avroPhonetic.parse("Th"), "ঠ");

            equal(avroPhonetic.parse("D"), "ড");

            equal(avroPhonetic.parse("Dh"), "ঢ");

            equal(avroPhonetic.parse("N"), "ণ");


            equal(avroPhonetic.parse("t"), "ত");

            equal(avroPhonetic.parse("th"), "থ");

            equal(avroPhonetic.parse("d"), "দ");

            equal(avroPhonetic.parse("dh"), "ধ");

            equal(avroPhonetic.parse("n"), "ন");
            equal(avroPhonetic.parse("no"), "ন");


            equal(avroPhonetic.parse("P"), "প");
            equal(avroPhonetic.parse("p"), "প");

            equal(avroPhonetic.parse("f"), "ফ");
            equal(avroPhonetic.parse("F"), "ফ");
            equal(avroPhonetic.parse("ph"), "ফ");

            equal(avroPhonetic.parse("b"), "ব");
            equal(avroPhonetic.parse("B"), "ব");

            equal(avroPhonetic.parse("v"), "ভ");
            equal(avroPhonetic.parse("V"), "ভ");
            equal(avroPhonetic.parse("bh"), "ভ");

            equal(avroPhonetic.parse("m"), "ম");
            equal(avroPhonetic.parse("M"), "ম");


            equal(avroPhonetic.parse("z"), "য");

            equal(avroPhonetic.parse("r"), "র");

            equal(avroPhonetic.parse("l"), "ল");
            equal(avroPhonetic.parse("L"), "ল");


            equal(avroPhonetic.parse("S"), "শ");

            equal(avroPhonetic.parse("s"), "স");

            equal(avroPhonetic.parse("Sh"), "ষ");

            equal(avroPhonetic.parse("h"), "হ");
            equal(avroPhonetic.parse("H"), "হ");


            equal(avroPhonetic.parse("R"), "ড়");

            equal(avroPhonetic.parse("Rh"), "ঢ়");

            equal(avroPhonetic.parse("Y"), "য়");

            equal(avroPhonetic.parse("t``"), "ৎ");
        });
    });

    describe("parse(): non-vowel signs", function() {
        it("non-vowel signs", function() {
            equal(avroPhonetic.parse("^"), "ঁ");
            equal(avroPhonetic.parse(",,"), "্‌");
            equal(avroPhonetic.parse("ng"), "ং");
            equal(avroPhonetic.parse(":"), "ঃ");
        });
    });

    describe("parse(): English -> Bangla special signs", function() {
        it("digits", function() {
            equal(avroPhonetic.parse("0"), "০");
            equal(avroPhonetic.parse("1"), "১");
            equal(avroPhonetic.parse("2"), "২");
            equal(avroPhonetic.parse("3"), "৩");
            equal(avroPhonetic.parse("4"), "৪");
            equal(avroPhonetic.parse("5"), "৫");
            equal(avroPhonetic.parse("6"), "৬");
            equal(avroPhonetic.parse("7"), "৭");
            equal(avroPhonetic.parse("8"), "৮");
            equal(avroPhonetic.parse("9"), "৯");
        });

        it("Special character", function() {
            equal(avroPhonetic.parse("$"), "৳");
            equal(avroPhonetic.parse("."), "।");
        });

    });

    describe("parse(): consonents - joints", function() {
        // TODO: Organize the letters in Bangla order where missing
        it("consonents - joints", function() {
            equal(avroPhonetic.parse("kk"), "ক্ক");
            equal(avroPhonetic.parse("kT"), "ক্ট");
            equal(avroPhonetic.parse("kt"), "ক্ত");
            equal(avroPhonetic.parse("kw"), "ক্ব");
            equal(avroPhonetic.parse("kl"), "ক্ল");
            equal(avroPhonetic.parse("ks"), "ক্স");
            equal(avroPhonetic.parse("kx"), "ক্ষ");
            equal(avroPhonetic.parse("kkh"), "ক্ষ");
            equal(avroPhonetic.parse("kSh"), "ক্ষ");
            equal(avroPhonetic.parse("kkhN"), "ক্ষ্ণ");
            equal(avroPhonetic.parse("kShN"), "ক্ষ্ণ");
            equal(avroPhonetic.parse("kkhm"), "ক্ষ্ম");
            equal(avroPhonetic.parse("kShm"), "ক্ষ্ম");
            equal(avroPhonetic.parse("kxN"), "ক্ষ্ণ");
            equal(avroPhonetic.parse("kxm"), "ক্ষ্ম");

            equal(avroPhonetic.parse("gg"), "জ্ঞ");
            equal(avroPhonetic.parse("GG"), "জ্ঞ");
            equal(avroPhonetic.parse("Gg"), "জ্ঞ");
            equal(avroPhonetic.parse("gG"), "জ্ঞ");
            equal(avroPhonetic.parse("jNG"), "জ্ঞ");
            equal(avroPhonetic.parse("gN"), "গ্ণ");
            equal(avroPhonetic.parse("GN"), "গ্ণ");
            equal(avroPhonetic.parse("gn"), "গ্ন");
            equal(avroPhonetic.parse("gm"), "গ্ম");
            equal(avroPhonetic.parse("Gm"), "গ্ম");
            equal(avroPhonetic.parse("gl"), "গ্ল");
            equal(avroPhonetic.parse("Gl"), "গ্ল");

            equal(avroPhonetic.parse("ghn"), "ঘ্ন");
            equal(avroPhonetic.parse("Ghn"), "ঘ্ন");
            equal(avroPhonetic.parse("gdh"), "গ্ধ");

            equal(avroPhonetic.parse("NgkSh"), "ঙ্ক্ষ");
            equal(avroPhonetic.parse("Ngkkh"), "ঙ্ক্ষ");
            equal(avroPhonetic.parse("Ngkx"), "ঙ্ক্ষ");

            equal(avroPhonetic.parse("cc"), "চ্চ");

            equal(avroPhonetic.parse("cNG"), "চ্ঞ");
            equal(avroPhonetic.parse("cch"), "চ্ছ");

            equal(avroPhonetic.parse("jj"), "জ্জ");
            equal(avroPhonetic.parse("jjh"), "জ্ঝ");

            equal(avroPhonetic.parse("NGch"), "ঞ্ছ");
            equal(avroPhonetic.parse("Nggh"), "ঙ্ঘ");
            equal(avroPhonetic.parse("Ngkh"), "ঙ্খ");
            equal(avroPhonetic.parse("NGjh"), "ঞ্ঝ");

            equal(avroPhonetic.parse("TT"), "ট্ট");
            equal(avroPhonetic.parse("Tm"), "ট্ম");

            equal(avroPhonetic.parse("DD"), "ড্ড");

            equal(avroPhonetic.parse("NT"), "ণ্ট");
            equal(avroPhonetic.parse("ND"), "ণ্ড");
            equal(avroPhonetic.parse("NN"), "ণ্ণ");
            equal(avroPhonetic.parse("Nn"), "ণ্ন");
            equal(avroPhonetic.parse("Nm"), "ণ্ম");
            equal(avroPhonetic.parse("NGc"), "ঞ্চ");
            equal(avroPhonetic.parse("NDh"), "ণ্ঢ");
            equal(avroPhonetic.parse("Ngk"), "ঙ্ক");
            equal(avroPhonetic.parse("Ngx"), "ঙ্ষ");
            equal(avroPhonetic.parse("Ngg"), "ঙ্গ");
            equal(avroPhonetic.parse("Ngm"), "ঙ্ম");
            equal(avroPhonetic.parse("NGj"), "ঞ্জ");
            equal(avroPhonetic.parse("NTh"), "ণ্ঠ");

            equal(avroPhonetic.parse("tt"), "ত্ত");
            equal(avroPhonetic.parse("tn"), "ত্ন");
            equal(avroPhonetic.parse("tm"), "ত্ম");

            equal(avroPhonetic.parse("tth"), "ত্থ");

            equal(avroPhonetic.parse("dg"), "দ্গ");
            equal(avroPhonetic.parse("dd"), "দ্দ");
            equal(avroPhonetic.parse("dv"), "দ্ভ");
            equal(avroPhonetic.parse("dm"), "দ্ম");
            equal(avroPhonetic.parse("dgh"), "দ্ঘ");
            equal(avroPhonetic.parse("ddh"), "দ্ধ");
            equal(avroPhonetic.parse("dbh"), "দ্ভ");

            equal(avroPhonetic.parse("dhn"), "ধ্ন");
            equal(avroPhonetic.parse("dhm"), "ধ্ম");

            equal(avroPhonetic.parse("nj"), "ঞ্জ");
            equal(avroPhonetic.parse("nk"), "ঙ্ক");
            equal(avroPhonetic.parse("nn"), "ন্ন");
            equal(avroPhonetic.parse("nm"), "ন্ম");
            equal(avroPhonetic.parse("nd"), "ন্দ");
            equal(avroPhonetic.parse("nT"), "ন্ট");
            equal(avroPhonetic.parse("nD"), "ন্ড");
            equal(avroPhonetic.parse("nt"), "ন্ত");
            equal(avroPhonetic.parse("ns"), "ন্স");
            equal(avroPhonetic.parse("nc"), "ঞ্চ");
            equal(avroPhonetic.parse("nch"), "ঞ্ছ");
            equal(avroPhonetic.parse("njh"), "ঞ্ঝ");
            equal(avroPhonetic.parse("ngh"), "ঙ্ঘ");
            equal(avroPhonetic.parse("ndh"), "ন্ধ");
            equal(avroPhonetic.parse("nTh"), "ন্ঠ");
            equal(avroPhonetic.parse("nth"), "ন্থ");
            equal(avroPhonetic.parse("nkh"), "ঙ্খ");
            equal(avroPhonetic.parse("ngo"), "ঙ্গ");

            equal(avroPhonetic.parse("pT"), "প্ট");
            equal(avroPhonetic.parse("pt"), "প্ত");
            equal(avroPhonetic.parse("pn"), "প্ন");
            equal(avroPhonetic.parse("pp"), "প্প");
            equal(avroPhonetic.parse("pl"), "প্ল");
            equal(avroPhonetic.parse("ps"), "প্স");

            equal(avroPhonetic.parse("fl"), "ফ্ল");
            equal(avroPhonetic.parse("phl"), "ফ্ল");

            equal(avroPhonetic.parse("bb"), "ব্ব");
            equal(avroPhonetic.parse("bd"), "ব্দ");
            equal(avroPhonetic.parse("bj"), "ব্জ");
            equal(avroPhonetic.parse("bl"), "ব্ল");
            equal(avroPhonetic.parse("bdh"), "ব্ধ");

            equal(avroPhonetic.parse("bhl"), "ভ্ল");
            equal(avroPhonetic.parse("vl"), "ভ্ল");

            equal(avroPhonetic.parse("mn"), "ম্ন");
            equal(avroPhonetic.parse("mp"), "ম্প");
            equal(avroPhonetic.parse("mf"), "ম্ফ");
            equal(avroPhonetic.parse("mb"), "ম্ব");
            equal(avroPhonetic.parse("mv"), "ম্ভ");
            equal(avroPhonetic.parse("mm"), "ম্ম");
            equal(avroPhonetic.parse("ml"), "ম্ল");
            equal(avroPhonetic.parse("mth"), "ম্থ");
            equal(avroPhonetic.parse("mph"), "ম্ফ");
            equal(avroPhonetic.parse("mbh"), "ম্ভ");

            equal(avroPhonetic.parse("lk"), "ল্ক");
            equal(avroPhonetic.parse("lg"), "ল্গ");
            equal(avroPhonetic.parse("lT"), "ল্ট");
            equal(avroPhonetic.parse("lD"), "ল্ড");
            equal(avroPhonetic.parse("lp"), "ল্প");
            equal(avroPhonetic.parse("lv"), "ল্ভ");
            equal(avroPhonetic.parse("lm"), "ল্ম");
            equal(avroPhonetic.parse("ll"), "ল্ল");
            equal(avroPhonetic.parse("lb"), "ল্ব");
            equal(avroPhonetic.parse("lbh"), "ল্ভ");
            equal(avroPhonetic.parse("ldh"), "ল্ধ");

            equal(avroPhonetic.parse("Sc"), "শ্চ");
            equal(avroPhonetic.parse("St"), "শ্ত");
            equal(avroPhonetic.parse("Sn"), "শ্ন");
            equal(avroPhonetic.parse("Sm"), "শ্ম");
            equal(avroPhonetic.parse("Sl"), "শ্ল");
            equal(avroPhonetic.parse("Sch"), "শ্ছ");
            equal(avroPhonetic.parse("shc"), "শ্চ");
            equal(avroPhonetic.parse("sht"), "শ্ত");
            equal(avroPhonetic.parse("shn"), "শ্ন");
            equal(avroPhonetic.parse("shm"), "শ্ম");
            equal(avroPhonetic.parse("shl"), "শ্ল");
            equal(avroPhonetic.parse("spl"), "স্প্ল");
            equal(avroPhonetic.parse("shch"), "শ্ছ");

            equal(avroPhonetic.parse("sk"), "স্ক");
            equal(avroPhonetic.parse("sT"), "স্ট");
            equal(avroPhonetic.parse("st"), "স্ত");
            equal(avroPhonetic.parse("sn"), "স্ন");
            equal(avroPhonetic.parse("sp"), "স্প");
            equal(avroPhonetic.parse("sf"), "স্ফ");
            equal(avroPhonetic.parse("sm"), "স্ম");
            equal(avroPhonetic.parse("sl"), "স্ল");
            equal(avroPhonetic.parse("skl"), "স্ক্ল");
            equal(avroPhonetic.parse("skh"), "স্খ");
            equal(avroPhonetic.parse("sth"), "স্থ");
            equal(avroPhonetic.parse("sph"), "স্ফ");

            equal(avroPhonetic.parse("Shk"), "ষ্ক");
            equal(avroPhonetic.parse("ShT"), "ষ্ট");
            equal(avroPhonetic.parse("ShN"), "ষ্ণ");
            equal(avroPhonetic.parse("Shp"), "ষ্প");
            equal(avroPhonetic.parse("Shf"), "ষ্ফ");
            equal(avroPhonetic.parse("Shm"), "ষ্ম");
            equal(avroPhonetic.parse("ShTh"), "ষ্ঠ");
            equal(avroPhonetic.parse("Shph"), "ষ্ফ");

            equal(avroPhonetic.parse("hN"), "হ্ণ");
            equal(avroPhonetic.parse("hn"), "হ্ন");
            equal(avroPhonetic.parse("hm"), "হ্ম");
            equal(avroPhonetic.parse("hl"), "হ্ল");

            equal(avroPhonetic.parse("Rg"), "ড়্গ");
        });
    });

    
    describe("parse(): Organize", function() {
        it("1 case-sensitive english character => 2 different 1 standalone-vowel in Bangla", function() {
            equal(avroPhonetic.parse("y"), "ইয়");
        });


        it("[ ] 2+ english special characters", function() {
            equal(avroPhonetic.parse(",,,"), "্‌,");
            equal(avroPhonetic.parse(",,`,"), "্‌,");
            equal(avroPhonetic.parse("`,,"), "্‌");
            equal(avroPhonetic.parse(",`,"), ",,");
            equal(avroPhonetic.parse(":`"), ":");
            equal(avroPhonetic.parse("^`"), "^");
            equal(avroPhonetic.parse("..."), "...");
            equal(avroPhonetic.parse(".`"), ".");
            equal(avroPhonetic.parse(".."), "।।");
        });

        it("[ ] two english letters", function() {
            equal(avroPhonetic.parse("aZ"), "অ্যা");
            equal(avroPhonetic.parse("AZ"), "অ্যা");

            equal(avroPhonetic.parse("bx"), "বক্স");

            equal(avroPhonetic.parse("cI"), "চী");

            equal(avroPhonetic.parse("ex"), "এক্স");

            equal(avroPhonetic.parse("hi"), "হি");

            equal(avroPhonetic.parse("io"), "ইও");
            equal(avroPhonetic.parse("ia"), "ইয়া");
            equal(avroPhonetic.parse("ih"), "ইহ");
            equal(avroPhonetic.parse("Ix"), "ঈক্স");
            equal(avroPhonetic.parse("II"), "ঈঈ");
            equal(avroPhonetic.parse("iu"), "ইউ");
            equal(avroPhonetic.parse("iY"), "ইয়");
            equal(avroPhonetic.parse("iO"), "ইও");


            equal(avroPhonetic.parse("ku"), "কু");
            equal(avroPhonetic.parse("ke"), "কে");
            equal(avroPhonetic.parse("ky"), "ক্য");
            equal(avroPhonetic.parse("kY"), "কয়");

            equal(avroPhonetic.parse("mr"), "ম্র");

            equal(avroPhonetic.parse("OO"), "ওও");
            equal(avroPhonetic.parse("oI"), "অঈ");
            equal(avroPhonetic.parse("oy"), "অয়");
            equal(avroPhonetic.parse("or"), "অর");
            equal(avroPhonetic.parse("oZ"), "অ্য");
            equal(avroPhonetic.parse("oY"), "অয়");

            equal(avroPhonetic.parse("pO"), "পো");
            equal(avroPhonetic.parse("rZ"), "র‍্য");
            equal(avroPhonetic.parse("ry"), "র‍্য");
            equal(avroPhonetic.parse("rZ"), "র‍্য");
            equal(avroPhonetic.parse("rr"), "রর");

            equal(avroPhonetic.parse("uk"), "উক");
            equal(avroPhonetic.parse("uu"), "উউ");
            equal(avroPhonetic.parse("Uy"), "ঊয়");


            equal(avroPhonetic.parse("xr"), "এক্সর");

            equal(avroPhonetic.parse("wa"), "ওয়া");
            equal(avroPhonetic.parse("we"), "ওয়ে");
            equal(avroPhonetic.parse("wr"), "ওর");

            equal(avroPhonetic.parse("ya"), "ইয়া");
            equal(avroPhonetic.parse("yo"), "ইয়");
            equal(avroPhonetic.parse("YY"), "য়য়");
            equal(avroPhonetic.parse("yr"), "ইয়র");
            equal(avroPhonetic.parse("yU"), "ইয়ূ");

            equal(avroPhonetic.parse("zr"), "য্র");
        });

        it("[ ] Misc test", function() {
            equal(avroPhonetic.parse("ksh"), "কশ");
            equal(avroPhonetic.parse("lkh"), "লখ");
            equal(avroPhonetic.parse("lgh"), "লঘ");
            equal(avroPhonetic.parse("lph"), "লফ");
            equal(avroPhonetic.parse("mpl"), "মপ্ল");
            equal(avroPhonetic.parse("ngOU"), "ঙ্গৌ");
            equal(avroPhonetic.parse("ngOI"), "ঙ্গৈ");
            equal(avroPhonetic.parse("nga"), "ঙ্গা");
            equal(avroPhonetic.parse("ngi"), "ঙ্গি");
            equal(avroPhonetic.parse("ngI"), "ঙ্গী");
            equal(avroPhonetic.parse("ngu"), "ঙ্গু");
            equal(avroPhonetic.parse("ngU"), "ঙ্গূ");
            equal(avroPhonetic.parse("nge"), "ঙ্গে");
            equal(avroPhonetic.parse("ngO"), "ঙ্গো");
            equal(avroPhonetic.parse("nsh"), "নশ");
            equal(avroPhonetic.parse("Ngr"), "ঙর");
            equal(avroPhonetic.parse("NGr"), "ঞর");
            equal(avroPhonetic.parse("ngr"), "ংর");
            equal(avroPhonetic.parse("OI`"), "ৈ");
            equal(avroPhonetic.parse("OU`"), "ৌ");
            
            equal(avroPhonetic.parse("kOI"), "কৈ");
            equal(avroPhonetic.parse(" OI"), " ঐ");
            equal(avroPhonetic.parse("(OI"), "(ঐ");
            equal(avroPhonetic.parse(".OI"), "।ঐ");
            
            equal(avroPhonetic.parse("kOU"), "কৌ");
            equal(avroPhonetic.parse(" OU"), " ঔ");
            equal(avroPhonetic.parse("-OU"), "-ঔ");
            equal(avroPhonetic.parse(",,OU"), "্‌ঔ");
            
            equal(avroPhonetic.parse(" O"), " ও");
            
            equal(avroPhonetic.parse("`O"), "ও");
            
        
            equal(avroPhonetic.parse("krri"), "কৃ");
            equal(avroPhonetic.parse("Irri"), "ঈঋ");
            equal(avroPhonetic.parse("^rri"), "ঁঋ");
            equal(avroPhonetic.parse(":rri"), "ঃঋ");
            equal(avroPhonetic.parse("krZ"), "ক্র্য");
            equal(avroPhonetic.parse("rrZ"), "রর‍্য");
            equal(avroPhonetic.parse("yrZ"), "ইয়র‍্য");
            equal(avroPhonetic.parse("wrZ"), "ওর‍্য");
            equal(avroPhonetic.parse("xrZ"), "এক্সর‍্য");
            equal(avroPhonetic.parse("irZ"), "ইর‍্য");
            equal(avroPhonetic.parse("-rZ"), "-র‍্য");
            equal(avroPhonetic.parse("rrrZ"), "ররর‍্য");

            equal(avroPhonetic.parse("qry"), "ক্র্য");
            equal(avroPhonetic.parse("rry"), "রর‍্য");
            equal(avroPhonetic.parse("yry"), "ইয়র‍্য");
            equal(avroPhonetic.parse("wry"), "ওর‍্য");
            equal(avroPhonetic.parse("xry"), "এক্সর‍্য");
            equal(avroPhonetic.parse("0ry"), "০র‍্য");
            equal(avroPhonetic.parse("rrrry"), "রররর‍্য");
            equal(avroPhonetic.parse("Rry"), "ড়্র্য");

            equal(avroPhonetic.parse("arr"), "আরর");
            equal(avroPhonetic.parse("arrk"), "আর্ক");
            equal(avroPhonetic.parse("arra"), "আররা");
            equal(avroPhonetic.parse("arr"), "আরর");
            equal(avroPhonetic.parse("arr!"), "আরর!");
            equal(avroPhonetic.parse("krr"), "ক্রর");
            equal(avroPhonetic.parse("krra"), "ক্ররা");

            equal(avroPhonetic.parse("1r"), "১র");
            equal(avroPhonetic.parse("+r"), "+র");

            equal(avroPhonetic.parse("mri"), "ম্রি");


            equal(avroPhonetic.parse("koo"), "কু");
            equal(avroPhonetic.parse("ooo"), "উঅ");
            equal(avroPhonetic.parse("!oo"), "!উ");
            equal(avroPhonetic.parse("!ooo"), "!উঅ");
            equal(avroPhonetic.parse("aoo"), "আউ");
            equal(avroPhonetic.parse("oop"), "উপ");
            equal(avroPhonetic.parse("ooo`"), "উ");

            equal(avroPhonetic.parse("!o"), "!অ");
            equal(avroPhonetic.parse("^o"), "ঁঅ");
            equal(avroPhonetic.parse("*o"), "*অ");


            equal(avroPhonetic.parse("`t``"), "ৎ");
            equal(avroPhonetic.parse("t``t``"), "ৎৎ");
            equal(avroPhonetic.parse("t```"), "ৎ");

            equal(avroPhonetic.parse("aaZ"), "আঅ্যা");

            equal(avroPhonetic.parse("a`"), "া");
            equal(avroPhonetic.parse("a``"), "া");
            equal(avroPhonetic.parse("ka`"), "কা");

            equal(avroPhonetic.parse("`a"), "আ");
            equal(avroPhonetic.parse("k`a"), "কআ");

            equal(avroPhonetic.parse("aaaa`"), "আআআা");
            
            equal(avroPhonetic.parse("`i"), "ই");

            equal(avroPhonetic.parse("i`h"), "িহ");

            equal(avroPhonetic.parse("0I"), "০ঈ");

            equal(avroPhonetic.parse("&u"), "&উ");
            equal(avroPhonetic.parse("u&"), "উ&");

            equal(avroPhonetic.parse("^U"), "ঁঊ");
            equal(avroPhonetic.parse("U^"), "ঊঁ");

            equal(avroPhonetic.parse("kee"), "কী");
            equal(avroPhonetic.parse("eek"), "ঈক");
            equal(avroPhonetic.parse("0ee"), "০ঈ");
            equal(avroPhonetic.parse("ee8"), "ঈ৮");
            equal(avroPhonetic.parse("(ee)"), "(ঈ)");
            equal(avroPhonetic.parse("e`"), "ে");

            equal(avroPhonetic.parse("#e#"), "#এ#");
            equal(avroPhonetic.parse("`e`"), "ে");

            equal(avroPhonetic.parse("kZS"), "ক্যশ");

            equal(avroPhonetic.parse("yaa"), "ইয়াআ");

            equal(avroPhonetic.parse("-wa-"), "-ওয়া-");
            equal(avroPhonetic.parse("woo"), "ওয়ু");
            equal(avroPhonetic.parse("wre"), "ওরে");

            equal(avroPhonetic.parse("k^"), "কঁ");
            equal(avroPhonetic.parse("k^i"), "কঁই");
            equal(avroPhonetic.parse("ki^"), "কিঁ");
        });
    });

    describe("parse(): interesting cases", function() {
        it("X in Bangla", function() {
            equal(avroPhonetic.parse("X"), "এক্স");
            equal(avroPhonetic.parse("x"), "এক্স");
        });

        it("[ ] ্য and its usage", function() {
            equal(avroPhonetic.parse("Z"), "্য");
        });

        it("[ ]  ্র and its usage", function() {
            equal(avroPhonetic.parse("Z"), "্য");
        });
    });

    describe("parse(): parses words", function() {
        it("word test", function () {
            equal(avroPhonetic.parse("ovro"), "অভ্র");
            equal(avroPhonetic.parse("phoneTiq"), "ফনেটিক");
            equal(avroPhonetic.parse("ami"), "আমি");
            equal(avroPhonetic.parse("bangla"), "বাংলা");
            equal(avroPhonetic.parse("gan"), "গান");
            equal(avroPhonetic.parse("gai"), "গাই");
            equal(avroPhonetic.parse("prthm"), "প্রথম");
            equal(avroPhonetic.parse("AlO"), "আলো");
        });
    });

    describe("parse(): parses sentences", function() {
        it("sentence test", function () {
            equal(avroPhonetic.parse("ovro-phoneTiq"), "অভ্র-ফনেটিক");
            equal(avroPhonetic.parse("ami banglay gan gai"), "আমি বাংলায় গান গাই");
            equal(avroPhonetic.parse("amader valObasa hoye gel ghas, kheye gel goru ar diye gelo ba^sh"), "আমাদের ভালোবাসা হয়ে গেল ঘাস, খেয়ে গেল গরু আর দিয়ে গেল বাঁশ");
        });
    });
});
