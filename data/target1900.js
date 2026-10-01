/* 既存アプリから内容を変更せず分離した教材。書籍の出典・版は未確認です。 */
(function(root) {
  "use strict";
  const dataset = {
  "setId": "target1900",
  "version": "legacy-1900-v1",
  "title": "既存1900語",
  "sourceStatus": "unconfirmed",
  "sourceRepository": "fuminyan9/target1900-study",
  "words": [
    {
      "no": 1,
      "word": "create",
      "meaning": "を創り出す；を引き起こす",
      "section": 1
    },
    {
      "no": 2,
      "word": "increase",
      "meaning": "増加する（⇔ decrease ⇒ 223）；を増やす",
      "section": 1
    },
    {
      "no": 3,
      "word": "improve",
      "meaning": "を向上させる；よくなる",
      "section": 1
    },
    {
      "no": 4,
      "word": "mean",
      "meaning": "を意味する；（...する）つもりである（to do）",
      "section": 1
    },
    {
      "no": 5,
      "word": "own",
      "meaning": "を所有している；（事実・罪など）を認める",
      "section": 1
    },
    {
      "no": 6,
      "word": "include",
      "meaning": "を含む（⇔ exclude ⇒ 1009）",
      "section": 1
    },
    {
      "no": 7,
      "word": "consider",
      "meaning": "を見なす；について考える",
      "section": 1
    },
    {
      "no": 8,
      "word": "allow",
      "meaning": "を許す；を与える；（～を）考慮に入れる（for）",
      "section": 1
    },
    {
      "no": 9,
      "word": "suggest",
      "meaning": "を提案する；を暗示する",
      "section": 1
    },
    {
      "no": 10,
      "word": "produce",
      "meaning": "を生産する；を取り出す",
      "section": 1
    },
    {
      "no": 11,
      "word": "decide",
      "meaning": "を決める；に決着をつける",
      "section": 1
    },
    {
      "no": 12,
      "word": "offer",
      "meaning": "を提供する，申し出る",
      "section": 1
    },
    {
      "no": 13,
      "word": "require",
      "meaning": "を要求する；を必要とする",
      "section": 1
    },
    {
      "no": 14,
      "word": "share",
      "meaning": "を共有する；を分担する",
      "section": 1
    },
    {
      "no": 15,
      "word": "store",
      "meaning": "を保存する；を蓄える",
      "section": 1
    },
    {
      "no": 16,
      "word": "tend",
      "meaning": "傾向がある；を世話する",
      "section": 1
    },
    {
      "no": 17,
      "word": "concern",
      "meaning": "〔受身形で〕心配している；〔受身形で〕（～に）関係する（with）；に関連する",
      "section": 1
    },
    {
      "no": 18,
      "word": "describe",
      "meaning": "について述べる，を説明する",
      "section": 1
    },
    {
      "no": 19,
      "word": "involve",
      "meaning": "を関与させる；を伴う",
      "section": 1
    },
    {
      "no": 20,
      "word": "reduce",
      "meaning": "を減らす；を（～に）変える（to）",
      "section": 1
    },
    {
      "no": 21,
      "word": "design",
      "meaning": "を設計する；を計画する",
      "section": 1
    },
    {
      "no": 22,
      "word": "force",
      "meaning": "に強いる；を強要する",
      "section": 1
    },
    {
      "no": 23,
      "word": "limit",
      "meaning": "を制限［規制］する",
      "section": 1
    },
    {
      "no": 24,
      "word": "bear",
      "meaning": "に耐える（≒ endure ⇒ 824）；を負う；を産む；を（心に）抱く",
      "section": 1
    },
    {
      "no": 25,
      "word": "affect",
      "meaning": "に影響を及ぼす（≒ influence ⇒ 49）；を感動させる",
      "section": 1
    },
    {
      "no": 26,
      "word": "deal",
      "meaning": "〔deal withで〕を処理する；〔deal inで〕を商う；を分配する",
      "section": 1
    },
    {
      "no": 27,
      "word": "avoid",
      "meaning": "を避ける",
      "section": 1
    },
    {
      "no": 28,
      "word": "relate",
      "meaning": "を関連づける；（～に）関連する（to）",
      "section": 1
    },
    {
      "no": 29,
      "word": "realize",
      "meaning": "に気づく；を実現する",
      "section": 1
    },
    {
      "no": 30,
      "word": "encourage",
      "meaning": "を奨励する；を励ます（⇔ discourage ⇒ 706）",
      "section": 1
    },
    {
      "no": 31,
      "word": "compare",
      "meaning": "を比較する；を（～に）たとえる（to）",
      "section": 1
    },
    {
      "no": 32,
      "word": "measure",
      "meaning": "を測る；を（比較して）評価する",
      "section": 1
    },
    {
      "no": 33,
      "word": "exist",
      "meaning": "存在する；生存する",
      "section": 1
    },
    {
      "no": 34,
      "word": "mark",
      "meaning": "に印をつける；を（記号で）示す；に汚れをつける",
      "section": 1
    },
    {
      "no": 35,
      "word": "challenge",
      "meaning": "に異議を唱える；（人）に挑む",
      "section": 1
    },
    {
      "no": 36,
      "word": "depend",
      "meaning": "頼る；～次第である",
      "section": 1
    },
    {
      "no": 37,
      "word": "object",
      "meaning": "反対する；（...）と言って反対する（that節）",
      "section": 1
    },
    {
      "no": 38,
      "word": "demand",
      "meaning": "を要求する",
      "section": 1
    },
    {
      "no": 39,
      "word": "found",
      "meaning": "を設立する；（理論など）を（～に基づいて）築く（on）",
      "section": 1
    },
    {
      "no": 40,
      "word": "complete",
      "meaning": "を完成させる，仕上げる",
      "section": 1
    },
    {
      "no": 41,
      "word": "idea",
      "meaning": "考え，思いつき；理解；見解；概念",
      "section": 1
    },
    {
      "no": 42,
      "word": "accord",
      "meaning": "一致；合意，協定",
      "section": 1
    },
    {
      "no": 43,
      "word": "company",
      "meaning": "会社；〔集合的に〕仲間；（仲間と）一緒にいること；一座",
      "section": 1
    },
    {
      "no": 44,
      "word": "interest",
      "meaning": "興味；利子；利害",
      "section": 1
    },
    {
      "no": 45,
      "word": "research",
      "meaning": "（～についての）研究，調査（into / on / in）",
      "section": 1
    },
    {
      "no": 46,
      "word": "cause",
      "meaning": "原因（⇔ effect ⇒ 48）；理由；大義",
      "section": 1
    },
    {
      "no": 47,
      "word": "reason",
      "meaning": "理由；（...する）根拠（to do）；理性；分別",
      "section": 1
    },
    {
      "no": 48,
      "word": "effect",
      "meaning": "影響，効果；結果",
      "section": 1
    },
    {
      "no": 49,
      "word": "influence",
      "meaning": "影響（力）",
      "section": 1
    },
    {
      "no": 50,
      "word": "situation",
      "meaning": "状況；（人の置かれた）立場",
      "section": 1
    },
    {
      "no": 51,
      "word": "environment",
      "meaning": "環境（≒ surroundings）",
      "section": 1
    },
    {
      "no": 52,
      "word": "skill",
      "meaning": "技能；熟練",
      "section": 1
    },
    {
      "no": 53,
      "word": "matter",
      "meaning": "事柄；問題；〔～s〕事態；〔the ～〕困難；物質",
      "section": 1
    },
    {
      "no": 54,
      "word": "view",
      "meaning": "（～についての）見解（on / about）；（～に対する）（特定の）見方（of）；眺め",
      "section": 1
    },
    {
      "no": 55,
      "word": "value",
      "meaning": "価値；価格；評価；〔～s〕価値観",
      "section": 1
    },
    {
      "no": 56,
      "word": "species",
      "meaning": "（生物の）種；種類",
      "section": 1
    },
    {
      "no": 57,
      "word": "thought",
      "meaning": "考え；思考",
      "section": 1
    },
    {
      "no": 58,
      "word": "knowledge",
      "meaning": "知識；知っていること；認識",
      "section": 1
    },
    {
      "no": 59,
      "word": "memory",
      "meaning": "記憶（力）；（～の）思い出（of）",
      "section": 1
    },
    {
      "no": 60,
      "word": "practice",
      "meaning": "実践，実行；（社会の）慣習；練習",
      "section": 1
    },
    {
      "no": 61,
      "word": "benefit",
      "meaning": "利益，恩恵；給付金",
      "section": 1
    },
    {
      "no": 62,
      "word": "theory",
      "meaning": "学説；理論；原理；推測",
      "section": 1
    },
    {
      "no": 63,
      "word": "issue",
      "meaning": "問題（点）；発行（物）；発表",
      "section": 1
    },
    {
      "no": 64,
      "word": "experiment",
      "meaning": "（～を対象とする）実験（on）",
      "section": 1
    },
    {
      "no": 65,
      "word": "article",
      "meaning": "記事；条項；品物",
      "section": 1
    },
    {
      "no": 66,
      "word": "focus",
      "meaning": "焦点；関心の的",
      "section": 1
    },
    {
      "no": 67,
      "word": "subject",
      "meaning": "話題；科目；主題；被験者",
      "section": 1
    },
    {
      "no": 68,
      "word": "project",
      "meaning": "計画；事業；研究計画",
      "section": 1
    },
    {
      "no": 69,
      "word": "quality",
      "meaning": "質（⇔ quantity ⇒ 471）；特質",
      "section": 1
    },
    {
      "no": 70,
      "word": "role",
      "meaning": "役割；（俳優などの）役",
      "section": 1
    },
    {
      "no": 71,
      "word": "term",
      "meaning": "（専門）用語；〔～s〕条件；〔～s〕間柄；学期",
      "section": 1
    },
    {
      "no": 72,
      "word": "statement",
      "meaning": "声明；主張；明細書",
      "section": 1
    },
    {
      "no": 73,
      "word": "material",
      "meaning": "材料，素材；資料；生地",
      "section": 1
    },
    {
      "no": 74,
      "word": "evidence",
      "meaning": "証拠",
      "section": 1
    },
    {
      "no": 75,
      "word": "source",
      "meaning": "（～の）源，根源（of）；出所，情報源",
      "section": 1
    },
    {
      "no": 76,
      "word": "community",
      "meaning": "（共同）社会，～界；地域社会；地域住民",
      "section": 1
    },
    {
      "no": 77,
      "word": "technology",
      "meaning": "科学技術；応用技術",
      "section": 1
    },
    {
      "no": 78,
      "word": "culture",
      "meaning": "文化；教養；耕作；養殖；培養",
      "section": 1
    },
    {
      "no": 79,
      "word": "appropriate",
      "meaning": "（～に）適切な（for / to）",
      "section": 1
    },
    {
      "no": 80,
      "word": "likely",
      "meaning": "ありそうな（⇔ unlikely ありそうもない）",
      "section": 1
    },
    {
      "no": 81,
      "word": "possible",
      "meaning": "可能な；可能性のある",
      "section": 1
    },
    {
      "no": 82,
      "word": "individual",
      "meaning": "個々の；個人の",
      "section": 1
    },
    {
      "no": 83,
      "word": "public",
      "meaning": "公の（⇔ private 私的な）；公衆の；公開の",
      "section": 1
    },
    {
      "no": 84,
      "word": "common",
      "meaning": "共通の；普通の；一般の",
      "section": 1
    },
    {
      "no": 85,
      "word": "certain",
      "meaning": "確信して；確かな；ある；一定の",
      "section": 1
    },
    {
      "no": 86,
      "word": "similar",
      "meaning": "似ている，類似した；同様の",
      "section": 1
    },
    {
      "no": 87,
      "word": "recent",
      "meaning": "最近の",
      "section": 1
    },
    {
      "no": 88,
      "word": "major",
      "meaning": "主要な；大きい（ほうの）；長調の",
      "section": 1
    },
    {
      "no": 89,
      "word": "patient",
      "meaning": "忍耐強い；勤勉な",
      "section": 1
    },
    {
      "no": 90,
      "word": "particular",
      "meaning": "特定の；特別の；（～について）やかましい（about）",
      "section": 1
    },
    {
      "no": 91,
      "word": "physical",
      "meaning": "身体の（⇔ mental ⇒ 183）；物質的な；物理学の",
      "section": 1
    },
    {
      "no": 92,
      "word": "various",
      "meaning": "さまざまな；いくつかの",
      "section": 1
    },
    {
      "no": 93,
      "word": "available",
      "meaning": "手に入る；利用できる；手が空いている",
      "section": 1
    },
    {
      "no": 94,
      "word": "native",
      "meaning": "出生地の；原産の；生得の",
      "section": 1
    },
    {
      "no": 95,
      "word": "political",
      "meaning": "政治（上）の",
      "section": 1
    },
    {
      "no": 96,
      "word": "due",
      "meaning": "予定された；（支払）期日で；しかるべき",
      "section": 1
    },
    {
      "no": 97,
      "word": "blank",
      "meaning": "空白の；無表情な；がらんとした",
      "section": 1
    },
    {
      "no": 98,
      "word": "ancient",
      "meaning": "古代の；昔からの",
      "section": 1
    },
    {
      "no": 99,
      "word": "correct",
      "meaning": "正しい；適切な",
      "section": 1
    },
    {
      "no": 100,
      "word": "despite",
      "meaning": "～にもかかわらず（≒ in spite of）",
      "section": 1
    },
    {
      "no": 101,
      "word": "notice",
      "meaning": "に気づく",
      "section": 2
    },
    {
      "no": 102,
      "word": "refer",
      "meaning": "言及する，関連する；参照する",
      "section": 2
    },
    {
      "no": 103,
      "word": "approach",
      "meaning": "に近づく；に取り組む",
      "section": 2
    },
    {
      "no": 104,
      "word": "wonder",
      "meaning": "かなと思う；（に）驚く（at）",
      "section": 2
    },
    {
      "no": 105,
      "word": "imagine",
      "meaning": "（を）想像する；（を）推測する",
      "section": 2
    },
    {
      "no": 106,
      "word": "recognize",
      "meaning": "を識別できる；を認める",
      "section": 2
    },
    {
      "no": 107,
      "word": "solve",
      "meaning": "を解く，解明する；（困難など）を解決する",
      "section": 2
    },
    {
      "no": 108,
      "word": "occur",
      "meaning": "起こる；心に浮かぶ；現れる",
      "section": 2
    },
    {
      "no": 109,
      "word": "argue",
      "meaning": "と主張する（≒ claim ⇒ 110, maintain ⇒ 206）；議論する",
      "section": 2
    },
    {
      "no": 110,
      "word": "claim",
      "meaning": "と主張する；を（自分のものとして）要求する",
      "section": 2
    },
    {
      "no": 111,
      "word": "express",
      "meaning": "を表す，述べる",
      "section": 2
    },
    {
      "no": 112,
      "word": "draw",
      "meaning": "を引き出す；を引く；を描く；近づく",
      "section": 2
    },
    {
      "no": 113,
      "word": "waste",
      "meaning": "を浪費する，無駄にする",
      "section": 2
    },
    {
      "no": 114,
      "word": "advance",
      "meaning": "を進歩させる；を進める；進歩する；進む",
      "section": 2
    },
    {
      "no": 115,
      "word": "spread",
      "meaning": "を広める；広がる",
      "section": 2
    },
    {
      "no": 116,
      "word": "prepare",
      "meaning": "を準備する；を調理する；（～のために）準備をする（for）",
      "section": 2
    },
    {
      "no": 117,
      "word": "gain",
      "meaning": "を獲得する；（を）増す",
      "section": 2
    },
    {
      "no": 118,
      "word": "achieve",
      "meaning": "を達成する；を成し遂げる",
      "section": 2
    },
    {
      "no": 119,
      "word": "establish",
      "meaning": "を確立する；を設立する",
      "section": 2
    },
    {
      "no": 120,
      "word": "supply",
      "meaning": "を供給する",
      "section": 2
    },
    {
      "no": 121,
      "word": "suppose",
      "meaning": "と思う；と仮定する",
      "section": 2
    },
    {
      "no": 122,
      "word": "perform",
      "meaning": "（を）行う；（を）演じる，（を）演奏する",
      "section": 2
    },
    {
      "no": 123,
      "word": "prefer",
      "meaning": "のほうを好む",
      "section": 2
    },
    {
      "no": 124,
      "word": "determine",
      "meaning": "を決定する；を正確に知る",
      "section": 2
    },
    {
      "no": 125,
      "word": "treat",
      "meaning": "を扱う；を治療する",
      "section": 2
    },
    {
      "no": 126,
      "word": "prove",
      "meaning": "を証明する；判明する，わかる",
      "section": 2
    },
    {
      "no": 127,
      "word": "apply",
      "meaning": "を適用［応用］する；申し込む；（～に）適用される（to / in）",
      "section": 2
    },
    {
      "no": 128,
      "word": "mention",
      "meaning": "に言及する；と言う",
      "section": 2
    },
    {
      "no": 129,
      "word": "communicate",
      "meaning": "（～と）情報交換をする（with）；を伝達する",
      "section": 2
    },
    {
      "no": 130,
      "word": "contain",
      "meaning": "を含む；を収容する；（感情など）を抑える",
      "section": 2
    },
    {
      "no": 131,
      "word": "contact",
      "meaning": "と連絡を取る；接触する",
      "section": 2
    },
    {
      "no": 132,
      "word": "regard",
      "meaning": "を見なす；を見る；を評価する",
      "section": 2
    },
    {
      "no": 133,
      "word": "respect",
      "meaning": "を尊敬する；を尊重する",
      "section": 2
    },
    {
      "no": 134,
      "word": "search",
      "meaning": "捜す；を捜索する；を詳しく調べる",
      "section": 2
    },
    {
      "no": 135,
      "word": "connect",
      "meaning": "をつなぐ；を関連づける",
      "section": 2
    },
    {
      "no": 136,
      "word": "decline",
      "meaning": "減少する；衰退する；を断る",
      "section": 2
    },
    {
      "no": 137,
      "word": "prevent",
      "meaning": "を妨げる；を防ぐ",
      "section": 2
    },
    {
      "no": 138,
      "word": "suffer",
      "meaning": "苦しむ；患う；（苦痛など）を経験する",
      "section": 2
    },
    {
      "no": 139,
      "word": "survive",
      "meaning": "を切り抜けて生き残る；より長生きする；生き延びる",
      "section": 2
    },
    {
      "no": 140,
      "word": "publish",
      "meaning": "を出版する；を公表する",
      "section": 2
    },
    {
      "no": 141,
      "word": "opportunity",
      "meaning": "機会（≒ chance）",
      "section": 2
    },
    {
      "no": 142,
      "word": "task",
      "meaning": "（課せられた）仕事，作業；課題；タスク",
      "section": 2
    },
    {
      "no": 143,
      "word": "industry",
      "meaning": "産業；勤勉（≒ diligence）",
      "section": 2
    },
    {
      "no": 144,
      "word": "medium",
      "meaning": "（情報伝達の）媒体；手段",
      "section": 2
    },
    {
      "no": 145,
      "word": "economy",
      "meaning": "経済（状態）；経済圏；節約",
      "section": 2
    },
    {
      "no": 146,
      "word": "policy",
      "meaning": "政策，方針；（個人の）主義",
      "section": 2
    },
    {
      "no": 147,
      "word": "account",
      "meaning": "説明；勘定；口座",
      "section": 2
    },
    {
      "no": 148,
      "word": "trade",
      "meaning": "貿易；商売，取引",
      "section": 2
    },
    {
      "no": 149,
      "word": "model",
      "meaning": "模範；モデル；模型；型",
      "section": 2
    },
    {
      "no": 150,
      "word": "figure",
      "meaning": "数字；姿；人物；図表",
      "section": 2
    },
    {
      "no": 151,
      "word": "cell",
      "meaning": "細胞；独房；電池",
      "section": 2
    },
    {
      "no": 152,
      "word": "image",
      "meaning": "印象，イメージ；画像；像",
      "section": 2
    },
    {
      "no": 153,
      "word": "emotion",
      "meaning": "感情，情動；感動",
      "section": 2
    },
    {
      "no": 154,
      "word": "stress",
      "meaning": "ストレス；圧力；強調",
      "section": 2
    },
    {
      "no": 155,
      "word": "decade",
      "meaning": "10年間",
      "section": 2
    },
    {
      "no": 156,
      "word": "range",
      "meaning": "範囲；射程距離；（同類の）組",
      "section": 2
    },
    {
      "no": 157,
      "word": "character",
      "meaning": "性格，個性；特徴；登場人物；文字",
      "section": 2
    },
    {
      "no": 158,
      "word": "advantage",
      "meaning": "利点；優勢；有利",
      "section": 2
    },
    {
      "no": 159,
      "word": "phrase",
      "meaning": "句；成句；言葉遣い",
      "section": 2
    },
    {
      "no": 160,
      "word": "damage",
      "meaning": "損害，損傷；〔～s〕損害賠償金",
      "section": 2
    },
    {
      "no": 161,
      "word": "impact",
      "meaning": "影響；（激しい）衝突；衝撃（力）",
      "section": 2
    },
    {
      "no": 162,
      "word": "method",
      "meaning": "方法；体系；秩序",
      "section": 2
    },
    {
      "no": 163,
      "word": "resource",
      "meaning": "〔通例～s〕資源；〔通例～s〕資金；才覚",
      "section": 2
    },
    {
      "no": 164,
      "word": "region",
      "meaning": "地域；領域；部位",
      "section": 2
    },
    {
      "no": 165,
      "word": "medicine",
      "meaning": "薬；医学",
      "section": 2
    },
    {
      "no": 166,
      "word": "detail",
      "meaning": "〔～s〕詳細（な情報），細部",
      "section": 2
    },
    {
      "no": 167,
      "word": "feature",
      "meaning": "特徴；〔通例～s〕顔つき；特集記事［番組］",
      "section": 2
    },
    {
      "no": 168,
      "word": "function",
      "meaning": "機能；関数",
      "section": 2
    },
    {
      "no": 169,
      "word": "access",
      "meaning": "利用，入手；接近（の機会・方法・権利）",
      "section": 2
    },
    {
      "no": 170,
      "word": "item",
      "meaning": "品目，項目；（同種の中の）～個；（短い）記事",
      "section": 2
    },
    {
      "no": 171,
      "word": "income",
      "meaning": "収入；所得",
      "section": 2
    },
    {
      "no": 172,
      "word": "attitude",
      "meaning": "態度；考え方，心構え",
      "section": 2
    },
    {
      "no": 173,
      "word": "site",
      "meaning": "用地，場所；跡地；（ウェブ）サイト",
      "section": 2
    },
    {
      "no": 174,
      "word": "aspect",
      "meaning": "（物事の）側面；観点；様相",
      "section": 2
    },
    {
      "no": 175,
      "word": "structure",
      "meaning": "構造；体系；構造物",
      "section": 2
    },
    {
      "no": 176,
      "word": "habit",
      "meaning": "習慣，癖",
      "section": 2
    },
    {
      "no": 177,
      "word": "link",
      "meaning": "関連，つながり；（2地点を結ぶ）交通手段；リンク",
      "section": 2
    },
    {
      "no": 178,
      "word": "instance",
      "meaning": "（具体的な）例，実例；（特定の）場合",
      "section": 2
    },
    {
      "no": 179,
      "word": "positive",
      "meaning": "肯定的な；積極的な；確信して；（検査結果が）陽性の",
      "section": 2
    },
    {
      "no": 180,
      "word": "negative",
      "meaning": "否定的な；消極的な；（検査結果が）陰性の",
      "section": 2
    },
    {
      "no": 181,
      "word": "complex",
      "meaning": "複雑な；複合（体）の",
      "section": 2
    },
    {
      "no": 182,
      "word": "current",
      "meaning": "現在の；現代の；通用している",
      "section": 2
    },
    {
      "no": 183,
      "word": "mental",
      "meaning": "精神の；知能の；頭の中で行う",
      "section": 2
    },
    {
      "no": 184,
      "word": "specific",
      "meaning": "特定の；明確な，具体的な；（～に）特有の（to）",
      "section": 2
    },
    {
      "no": 185,
      "word": "significant",
      "meaning": "重要な，重大な；意義深い",
      "section": 2
    },
    {
      "no": 186,
      "word": "essential",
      "meaning": "（～に）必要不可欠な（to / for）；本質的な",
      "section": 2
    },
    {
      "no": 187,
      "word": "official",
      "meaning": "公用の；公式の；役所の",
      "section": 2
    },
    {
      "no": 188,
      "word": "financial",
      "meaning": "財政（上）の；財界の",
      "section": 2
    },
    {
      "no": 189,
      "word": "academic",
      "meaning": "学問の；大学の",
      "section": 2
    },
    {
      "no": 190,
      "word": "aware",
      "meaning": "気づいて，知って",
      "section": 2
    },
    {
      "no": 191,
      "word": "worth",
      "meaning": "（...する）に値する（doing）；の価値がある",
      "section": 2
    },
    {
      "no": 192,
      "word": "potential",
      "meaning": "潜在的な；可能性を秘めた",
      "section": 2
    },
    {
      "no": 193,
      "word": "active",
      "meaning": "積極的な；活動的な；効力のある",
      "section": 2
    },
    {
      "no": 194,
      "word": "digital",
      "meaning": "デジタル方式の；デジタル［数字］表示の",
      "section": 2
    },
    {
      "no": 195,
      "word": "mobile",
      "meaning": "可動［移動］式の；流動性のある",
      "section": 2
    },
    {
      "no": 196,
      "word": "novel",
      "meaning": "斬新な，目新しい",
      "section": 2
    },
    {
      "no": 197,
      "word": "plastic",
      "meaning": "柔軟な；プラスチックの，ビニールの",
      "section": 2
    },
    {
      "no": 198,
      "word": "chemical",
      "meaning": "化学の，化学的な",
      "section": 2
    },
    {
      "no": 199,
      "word": "necessary",
      "meaning": "必要な（≒ essential ⇒ 186）",
      "section": 2
    },
    {
      "no": 200,
      "word": "eventually",
      "meaning": "結局（は）",
      "section": 2
    },
    {
      "no": 201,
      "word": "identify",
      "meaning": "を特定する；を（～と）同一視する（with）",
      "section": 3
    },
    {
      "no": 202,
      "word": "represent",
      "meaning": "を表す；を代表する；に相当する",
      "section": 3
    },
    {
      "no": 203,
      "word": "indicate",
      "meaning": "を指し示す；を述べる",
      "section": 3
    },
    {
      "no": 204,
      "word": "manage",
      "meaning": "をなんとか成し遂げる；を管理する",
      "section": 3
    },
    {
      "no": 205,
      "word": "attend",
      "meaning": "に出席する；（を）世話する；（～に）対処［対応］する（to）",
      "section": 3
    },
    {
      "no": 206,
      "word": "maintain",
      "meaning": "を維持する；と主張する；を養う",
      "section": 3
    },
    {
      "no": 207,
      "word": "survey",
      "meaning": "を調査する；をじろじろ見る；を概観する",
      "section": 3
    },
    {
      "no": 208,
      "word": "replace",
      "meaning": "に取って代わる；を取り替える",
      "section": 3
    },
    {
      "no": 209,
      "word": "sort",
      "meaning": "を（～に）分類する（into）；を（～から）えり分ける（from）",
      "section": 3
    },
    {
      "no": 210,
      "word": "conduct",
      "meaning": "（調査・実験など）を実施する；を導く",
      "section": 3
    },
    {
      "no": 211,
      "word": "associate",
      "meaning": "を結び付けて考える；（～と）交際する（with）",
      "section": 3
    },
    {
      "no": 212,
      "word": "attempt",
      "meaning": "を試みる，企てる",
      "section": 3
    },
    {
      "no": 213,
      "word": "promote",
      "meaning": "を促進する；〔通例受身形で〕昇進する",
      "section": 3
    },
    {
      "no": 214,
      "word": "earn",
      "meaning": "を稼ぐ；を得る；をもたらす",
      "section": 3
    },
    {
      "no": 215,
      "word": "unite",
      "meaning": "を団結させる；（を）結合する；団結する",
      "section": 3
    },
    {
      "no": 216,
      "word": "feed",
      "meaning": "に食べ物［乳］を与える；に（～を）供給［補給］する（with）；餌を食べる",
      "section": 3
    },
    {
      "no": 217,
      "word": "seek",
      "meaning": "を追い求める；（助けなど）を要請する",
      "section": 3
    },
    {
      "no": 218,
      "word": "observe",
      "meaning": "に気づく；を観察する；を遵守する",
      "section": 3
    },
    {
      "no": 219,
      "word": "reveal",
      "meaning": "を明らかにする；を見せる",
      "section": 3
    },
    {
      "no": 220,
      "word": "estimate",
      "meaning": "と推定する；を見積もる；を評価する",
      "section": 3
    },
    {
      "no": 221,
      "word": "reflect",
      "meaning": "を反映する；（を）反射する；（を）熟考する",
      "section": 3
    },
    {
      "no": 222,
      "word": "attract",
      "meaning": "を引きつける",
      "section": 3
    },
    {
      "no": 223,
      "word": "decrease",
      "meaning": "減少する（⇔ increase ⇒ 2）；を減らす",
      "section": 3
    },
    {
      "no": 224,
      "word": "ignore",
      "meaning": "を無視する",
      "section": 3
    },
    {
      "no": 225,
      "word": "match",
      "meaning": "（と）合う；に匹敵する；一致する",
      "section": 3
    },
    {
      "no": 226,
      "word": "define",
      "meaning": "を定義する；を明確にする",
      "section": 3
    },
    {
      "no": 227,
      "word": "adapt",
      "meaning": "適応する；を（～に）適合させる（to）",
      "section": 3
    },
    {
      "no": 228,
      "word": "contribute",
      "meaning": "貢献する，一因となる；（を）寄付する；（を）寄稿する",
      "section": 3
    },
    {
      "no": 229,
      "word": "exchange",
      "meaning": "（を）交換する；両替する",
      "section": 3
    },
    {
      "no": 230,
      "word": "display",
      "meaning": "を示す；を発揮する；を展示［陳列］する",
      "section": 3
    },
    {
      "no": 231,
      "word": "respond",
      "meaning": "反応する；答える",
      "section": 3
    },
    {
      "no": 232,
      "word": "hide",
      "meaning": "を隠す（≒ conceal ⇒ 1116）；隠れる",
      "section": 3
    },
    {
      "no": 233,
      "word": "doubt",
      "meaning": "ではないと思う；を疑う",
      "section": 3
    },
    {
      "no": 234,
      "word": "remove",
      "meaning": "を取り除く；を解雇する",
      "section": 3
    },
    {
      "no": 235,
      "word": "wind",
      "meaning": "（ねじなど）を巻く；（道などが）曲がりくねる；巻きつく",
      "section": 3
    },
    {
      "no": 236,
      "word": "assume",
      "meaning": "を当然のことと思う，と仮定する；（権力など）を手に入れる；（責任など）を引き受ける",
      "section": 3
    },
    {
      "no": 237,
      "word": "relax",
      "meaning": "くつろぐ；緩む；をくつろがせる；を緩める",
      "section": 3
    },
    {
      "no": 238,
      "word": "satisfy",
      "meaning": "を満足させる；（条件など）を満たす",
      "section": 3
    },
    {
      "no": 239,
      "word": "desire",
      "meaning": "を強く望む",
      "section": 3
    },
    {
      "no": 240,
      "word": "succeed",
      "meaning": "（～に）成功する（in）；（～を）継承する（to）",
      "section": 3
    },
    {
      "no": 241,
      "word": "concept",
      "meaning": "概念；考え；（商品・販売の）コンセプト",
      "section": 3
    },
    {
      "no": 242,
      "word": "fashion",
      "meaning": "流行，ファッション；方法，流儀",
      "section": 3
    },
    {
      "no": 243,
      "word": "device",
      "meaning": "装置，機器；方策；デバイス",
      "section": 3
    },
    {
      "no": 244,
      "word": "charge",
      "meaning": "料金；世話；管理；告発",
      "section": 3
    },
    {
      "no": 245,
      "word": "contrast",
      "meaning": "（～との）対照（with / to）",
      "section": 3
    },
    {
      "no": 246,
      "word": "colleague",
      "meaning": "（職場の）同僚",
      "section": 3
    },
    {
      "no": 247,
      "word": "pain",
      "meaning": "苦痛，痛み；苦悩；〔～s〕骨折り",
      "section": 3
    },
    {
      "no": 248,
      "word": "bill",
      "meaning": "請求書；【英】勘定書（≒ 【米】check）；法案",
      "section": 3
    },
    {
      "no": 249,
      "word": "content",
      "meaning": "内容，中身；コンテンツ",
      "section": 3
    },
    {
      "no": 250,
      "word": "section",
      "meaning": "部門；部分；地区；欄",
      "section": 3
    },
    {
      "no": 251,
      "word": "audience",
      "meaning": "〔集合的に〕聴衆，観客；視聴者",
      "section": 3
    },
    {
      "no": 252,
      "word": "surface",
      "meaning": "表面；〔the ～〕外見",
      "section": 3
    },
    {
      "no": 253,
      "word": "crop",
      "meaning": "〔しばしば～s〕作物；収穫高",
      "section": 3
    },
    {
      "no": 254,
      "word": "topic",
      "meaning": "話題，トピック；主題",
      "section": 3
    },
    {
      "no": 255,
      "word": "technique",
      "meaning": "技術；技巧；手法",
      "section": 3
    },
    {
      "no": 256,
      "word": "status",
      "meaning": "地位；状態",
      "section": 3
    },
    {
      "no": 257,
      "word": "option",
      "meaning": "選択（の自由）；選択肢",
      "section": 3
    },
    {
      "no": 258,
      "word": "reward",
      "meaning": "報酬；報い",
      "section": 3
    },
    {
      "no": 259,
      "word": "race",
      "meaning": "人種；民族；競争",
      "section": 3
    },
    {
      "no": 260,
      "word": "crime",
      "meaning": "罪，犯罪；違法行為",
      "section": 3
    },
    {
      "no": 261,
      "word": "conflict",
      "meaning": "争い；論争；不一致",
      "section": 3
    },
    {
      "no": 262,
      "word": "struggle",
      "meaning": "闘い；懸命の努力",
      "section": 3
    },
    {
      "no": 263,
      "word": "context",
      "meaning": "状況，背景；文脈",
      "section": 3
    },
    {
      "no": 264,
      "word": "debate",
      "meaning": "討論，論争；討論会",
      "section": 3
    },
    {
      "no": 265,
      "word": "fuel",
      "meaning": "燃料；勢いを増加させるもの",
      "section": 3
    },
    {
      "no": 266,
      "word": "pollution",
      "meaning": "汚染，公害",
      "section": 3
    },
    {
      "no": 267,
      "word": "trend",
      "meaning": "（～への）傾向（toward）；流行",
      "section": 3
    },
    {
      "no": 268,
      "word": "balance",
      "meaning": "均衡，バランス；（体の）平衡；残高",
      "section": 3
    },
    {
      "no": 269,
      "word": "traffic",
      "meaning": "交通；通行；交通［輸送］量；（不正）取引",
      "section": 3
    },
    {
      "no": 270,
      "word": "strategy",
      "meaning": "戦略",
      "section": 3
    },
    {
      "no": 271,
      "word": "basis",
      "meaning": "基礎；根拠；基準",
      "section": 3
    },
    {
      "no": 272,
      "word": "consequence",
      "meaning": "〔通例～s〕結果；重大性",
      "section": 3
    },
    {
      "no": 273,
      "word": "aim",
      "meaning": "目的，目標；狙い",
      "section": 3
    },
    {
      "no": 274,
      "word": "ancestor",
      "meaning": "祖先（⇔ descendant 子孫）；原型",
      "section": 3
    },
    {
      "no": 275,
      "word": "gene",
      "meaning": "遺伝子",
      "section": 3
    },
    {
      "no": 276,
      "word": "track",
      "meaning": "跡；軌道；【米】（鉄道の）番線；走路",
      "section": 3
    },
    {
      "no": 277,
      "word": "revolution",
      "meaning": "革命；回転；（天体の）公転（⇔ rotation 自転）",
      "section": 3
    },
    {
      "no": 278,
      "word": "progress",
      "meaning": "進歩；前進",
      "section": 3
    },
    {
      "no": 279,
      "word": "cognitive",
      "meaning": "認知の",
      "section": 3
    },
    {
      "no": 280,
      "word": "ideal",
      "meaning": "理想的な；観念的な",
      "section": 3
    },
    {
      "no": 281,
      "word": "efficient",
      "meaning": "効率的な；有能な",
      "section": 3
    },
    {
      "no": 282,
      "word": "universal",
      "meaning": "普遍的な；宇宙の；万能の",
      "section": 3
    },
    {
      "no": 283,
      "word": "vast",
      "meaning": "莫大な；広大な",
      "section": 3
    },
    {
      "no": 284,
      "word": "extra",
      "meaning": "追加の，余分の；別勘定の",
      "section": 3
    },
    {
      "no": 285,
      "word": "entire",
      "meaning": "全体の，全部の（≒ whole）；完全な",
      "section": 3
    },
    {
      "no": 286,
      "word": "familiar",
      "meaning": "精通している；よく知られている",
      "section": 3
    },
    {
      "no": 287,
      "word": "obvious",
      "meaning": "明らかな（≒ clear）",
      "section": 3
    },
    {
      "no": 288,
      "word": "moral",
      "meaning": "道徳（上）の，倫理的な；道徳的な",
      "section": 3
    },
    {
      "no": 289,
      "word": "ordinary",
      "meaning": "一般の，普通の；並の",
      "section": 3
    },
    {
      "no": 290,
      "word": "equal",
      "meaning": "（～に）等しい（to）；匹敵する；平等な",
      "section": 3
    },
    {
      "no": 291,
      "word": "previous",
      "meaning": "以前の，前の",
      "section": 3
    },
    {
      "no": 292,
      "word": "False",
      "meaning": "間違った；虚偽の；偽の",
      "section": 3
    },
    {
      "no": 293,
      "word": "rare",
      "meaning": "まれな，珍しい；希少な",
      "section": 3
    },
    {
      "no": 294,
      "word": "legal",
      "meaning": "法律の；合法の（⇔ illegal 違法の）",
      "section": 3
    },
    {
      "no": 295,
      "word": "independent",
      "meaning": "（～から）独立した（of / from）",
      "section": 3
    },
    {
      "no": 296,
      "word": "extreme",
      "meaning": "極端な；極度の，過激な",
      "section": 3
    },
    {
      "no": 297,
      "word": "actual",
      "meaning": "実際の，現実の",
      "section": 3
    },
    {
      "no": 298,
      "word": "willing",
      "meaning": "いとわない，かまわないと思う",
      "section": 3
    },
    {
      "no": 299,
      "word": "urban",
      "meaning": "都市の；都会的な（⇔ rural ⇒ 387）",
      "section": 3
    },
    {
      "no": 300,
      "word": "whereas",
      "meaning": "～するのに（対し），～する一方",
      "section": 3
    },
    {
      "no": 301,
      "word": "predict",
      "meaning": "を予言［予測］する",
      "section": 4
    },
    {
      "no": 302,
      "word": "examine",
      "meaning": "を調べる；を診察する；を尋問する",
      "section": 4
    },
    {
      "no": 303,
      "word": "trust",
      "meaning": "を信頼する；を（信頼して）託す",
      "section": 4
    },
    {
      "no": 304,
      "word": "stick",
      "meaning": "を動けなくする；を突き刺す；（～に）くっつく（to / on）",
      "section": 4
    },
    {
      "no": 305,
      "word": "emerge",
      "meaning": "現れる；明らかになる；台頭する",
      "section": 4
    },
    {
      "no": 306,
      "word": "vary",
      "meaning": "さまざまである；変わる；を変える",
      "section": 4
    },
    {
      "no": 307,
      "word": "release",
      "meaning": "を放出する；を解放する；を発表する",
      "section": 4
    },
    {
      "no": 308,
      "word": "divide",
      "meaning": "を分ける；分かれる",
      "section": 4
    },
    {
      "no": 309,
      "word": "enable",
      "meaning": "（人）が...できるようにする；を可能にする",
      "section": 4
    },
    {
      "no": 310,
      "word": "judge",
      "meaning": "（を）判断する；に判決を下す",
      "section": 4
    },
    {
      "no": 311,
      "word": "rely",
      "meaning": "頼る（≒ depend ⇒ 36）",
      "section": 4
    },
    {
      "no": 312,
      "word": "engage",
      "meaning": "を従事させる；を（～として）雇う（as）；（～に）従事する（in / with）",
      "section": 4
    },
    {
      "no": 313,
      "word": "shift",
      "meaning": "を変える，移す；変わる；移動する",
      "section": 4
    },
    {
      "no": 314,
      "word": "adopt",
      "meaning": "を採用する；（態度など）をとる；を養子にする",
      "section": 4
    },
    {
      "no": 315,
      "word": "acquire",
      "meaning": "を得る；を習得する",
      "section": 4
    },
    {
      "no": 316,
      "word": "expand",
      "meaning": "（を）拡大する；（を）詳説する",
      "section": 4
    },
    {
      "no": 317,
      "word": "refuse",
      "meaning": "を拒む；を断る；拒絶する",
      "section": 4
    },
    {
      "no": 318,
      "word": "strike",
      "meaning": "の心を打つ；を襲う；を打つ；（に）ぶつかる",
      "section": 4
    },
    {
      "no": 319,
      "word": "repeat",
      "meaning": "（を）繰り返す；を復唱する",
      "section": 4
    },
    {
      "no": 320,
      "word": "consume",
      "meaning": "を消費する；を食べる，飲む",
      "section": 4
    },
    {
      "no": 321,
      "word": "confuse",
      "meaning": "を混同する；を当惑させる",
      "section": 4
    },
    {
      "no": 322,
      "word": "select",
      "meaning": "を選ぶ，えり抜く",
      "section": 4
    },
    {
      "no": 323,
      "word": "evolve",
      "meaning": "（徐々に）発展する；進化する",
      "section": 4
    },
    {
      "no": 324,
      "word": "convince",
      "meaning": "を納得［確信］させる",
      "section": 4
    },
    {
      "no": 325,
      "word": "recall",
      "meaning": "を思い出す；を呼び戻す",
      "section": 4
    },
    {
      "no": 326,
      "word": "destroy",
      "meaning": "を破壊する；（人）を破滅させる",
      "section": 4
    },
    {
      "no": 327,
      "word": "preserve",
      "meaning": "を保存する；を保持する；を保護する",
      "section": 4
    },
    {
      "no": 328,
      "word": "organize",
      "meaning": "を準備する；を組織する",
      "section": 4
    },
    {
      "no": 329,
      "word": "warn",
      "meaning": "（人）に（～を）警告［注意］する（of / against）",
      "section": 4
    },
    {
      "no": 330,
      "word": "address",
      "meaning": "（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）",
      "section": 4
    },
    {
      "no": 331,
      "word": "operate",
      "meaning": "を操作する；機能する；手術する",
      "section": 4
    },
    {
      "no": 332,
      "word": "participate",
      "meaning": "参加する",
      "section": 4
    },
    {
      "no": 333,
      "word": "surround",
      "meaning": "を取り巻く；にまつわる",
      "section": 4
    },
    {
      "no": 334,
      "word": "flow",
      "meaning": "流れる；（～から）生じる（from）",
      "section": 4
    },
    {
      "no": 335,
      "word": "bore",
      "meaning": "（人）を退屈させる，うんざりさせる",
      "section": 4
    },
    {
      "no": 336,
      "word": "complain",
      "meaning": "（と）不平［苦情］を言う；訴える",
      "section": 4
    },
    {
      "no": 337,
      "word": "host",
      "meaning": "を主催する；のホスト役を務める",
      "section": 4
    },
    {
      "no": 338,
      "word": "combine",
      "meaning": "を（～と）結び付ける（with）；（～と）結び付く（with）",
      "section": 4
    },
    {
      "no": 339,
      "word": "extend",
      "meaning": "を伸［延］ばす；伸びる；及ぶ",
      "section": 4
    },
    {
      "no": 340,
      "word": "appreciate",
      "meaning": "を正当に評価する；を鑑賞する；を感謝する",
      "section": 4
    },
    {
      "no": 341,
      "word": "target",
      "meaning": "（到達・攻撃）目標；的",
      "section": 4
    },
    {
      "no": 342,
      "word": "element",
      "meaning": "要素，成分；元素；〔an / ofで〕少しの",
      "section": 4
    },
    {
      "no": 343,
      "word": "principle",
      "meaning": "原則，原理；主義，信条",
      "section": 4
    },
    {
      "no": 344,
      "word": "phenomenon",
      "meaning": "現象",
      "section": 4
    },
    {
      "no": 345,
      "word": "atmosphere",
      "meaning": "〔the ～〕大気；雰囲気",
      "section": 4
    },
    {
      "no": 346,
      "word": "origin",
      "meaning": "起源；源",
      "section": 4
    },
    {
      "no": 347,
      "word": "personality",
      "meaning": "個性，性格",
      "section": 4
    },
    {
      "no": 348,
      "word": "capacity",
      "meaning": "（最大）容量，収容能力；（潜在）能力",
      "section": 4
    },
    {
      "no": 349,
      "word": "profit",
      "meaning": "利益；収益（率）；得",
      "section": 4
    },
    {
      "no": 350,
      "word": "circumstance",
      "meaning": "〔通例～s〕状況，事情；境遇",
      "section": 4
    },
    {
      "no": 351,
      "word": "manner",
      "meaning": "〔～s〕作法；方法；物腰",
      "section": 4
    },
    {
      "no": 352,
      "word": "threat",
      "meaning": "脅威；（悪い）兆し；脅迫",
      "section": 4
    },
    {
      "no": 353,
      "word": "resident",
      "meaning": "居住者；滞在者",
      "section": 4
    },
    {
      "no": 354,
      "word": "wealth",
      "meaning": "富；資源；富裕",
      "section": 4
    },
    {
      "no": 355,
      "word": "institution",
      "meaning": "機関；協会；施設；制度",
      "section": 4
    },
    {
      "no": 356,
      "word": "authority",
      "meaning": "〔通例 the ～ties〕（関係）当局；権威；権限",
      "section": 4
    },
    {
      "no": 357,
      "word": "vote",
      "meaning": "投票；投票結果；〔the ～〕選挙権",
      "section": 4
    },
    {
      "no": 358,
      "word": "sight",
      "meaning": "光景；〔the ～s〕名所；見（え）ること；視野；視力",
      "section": 4
    },
    {
      "no": 359,
      "word": "campaign",
      "meaning": "運動；軍事行動",
      "section": 4
    },
    {
      "no": 360,
      "word": "fund",
      "meaning": "〔しばしば～s〕基金，資金",
      "section": 4
    },
    {
      "no": 361,
      "word": "web",
      "meaning": "〔the W-〕ウェブ；（クモの）巣",
      "section": 4
    },
    {
      "no": 362,
      "word": "symbol",
      "meaning": "象徴，シンボル；記号；標章",
      "section": 4
    },
    {
      "no": 363,
      "word": "analysis",
      "meaning": "分析（結果）（⇔ synthesis ⇒ 1868）",
      "section": 4
    },
    {
      "no": 364,
      "word": "version",
      "meaning": "（本・製品などの）版；解釈",
      "section": 4
    },
    {
      "no": 365,
      "word": "perspective",
      "meaning": "観点，見方；大局観；遠近法",
      "section": 4
    },
    {
      "no": 366,
      "word": "crisis",
      "meaning": "危機",
      "section": 4
    },
    {
      "no": 367,
      "word": "disaster",
      "meaning": "災害；惨事",
      "section": 4
    },
    {
      "no": 368,
      "word": "lecture",
      "meaning": "講義，講演；説教",
      "section": 4
    },
    {
      "no": 369,
      "word": "psychology",
      "meaning": "心理学；心理（状態）",
      "section": 4
    },
    {
      "no": 370,
      "word": "gender",
      "meaning": "（社会的・文化的）性，性別",
      "section": 4
    },
    {
      "no": 371,
      "word": "custom",
      "meaning": "（社会的な）慣習；〔～s〕税関；〔～s〕関税",
      "section": 4
    },
    {
      "no": 372,
      "word": "court",
      "meaning": "裁判所，法廷；裁判；宮廷；中庭",
      "section": 4
    },
    {
      "no": 373,
      "word": "desert",
      "meaning": "砂漠；不毛の地",
      "section": 4
    },
    {
      "no": 374,
      "word": "soil",
      "meaning": "土地，土壌；（悪事などの）温床",
      "section": 4
    },
    {
      "no": 375,
      "word": "agriculture",
      "meaning": "農業；農学，畜産",
      "section": 4
    },
    {
      "no": 376,
      "word": "fossil",
      "meaning": "化石；時代遅れの人［物］",
      "section": 4
    },
    {
      "no": 377,
      "word": "document",
      "meaning": "（公）文書，書類；記録，資料",
      "section": 4
    },
    {
      "no": 378,
      "word": "vocabulary",
      "meaning": "語彙",
      "section": 4
    },
    {
      "no": 379,
      "word": "intelligent",
      "meaning": "聡明な；知能を有する",
      "section": 4
    },
    {
      "no": 380,
      "word": "conscious",
      "meaning": "意識して，気づいて（≒ aware）",
      "section": 4
    },
    {
      "no": 381,
      "word": "capable",
      "meaning": "能力がある；有能な",
      "section": 4
    },
    {
      "no": 382,
      "word": "accurate",
      "meaning": "正確な；精密な",
      "section": 4
    },
    {
      "no": 383,
      "word": "fundamental",
      "meaning": "基本的な；必須の",
      "section": 4
    },
    {
      "no": 384,
      "word": "artificial",
      "meaning": "人工の（⇔ natural 自然の）；不自然な",
      "section": 4
    },
    {
      "no": 385,
      "word": "firm",
      "meaning": "確固たる；堅固な；安定した",
      "section": 4
    },
    {
      "no": 386,
      "word": "overall",
      "meaning": "総合的な；全体的な",
      "section": 4
    },
    {
      "no": 387,
      "word": "rural",
      "meaning": "田舎の（⇔ urban ⇒ 299），田園の",
      "section": 4
    },
    {
      "no": 388,
      "word": "military",
      "meaning": "軍の，軍事（用）の",
      "section": 4
    },
    {
      "no": 389,
      "word": "nuclear",
      "meaning": "核の，原子力の",
      "section": 4
    },
    {
      "no": 390,
      "word": "biological",
      "meaning": "生物学（上）の",
      "section": 4
    },
    {
      "no": 391,
      "word": "constant",
      "meaning": "絶え間ない；一定の",
      "section": 4
    },
    {
      "no": 392,
      "word": "severe",
      "meaning": "（人・規律・事態・天気などが）厳しい；猛烈な",
      "section": 4
    },
    {
      "no": 393,
      "word": "visual",
      "meaning": "視覚の；目に見える",
      "section": 4
    },
    {
      "no": 394,
      "word": "enormous",
      "meaning": "莫大な，巨大な",
      "section": 4
    },
    {
      "no": 395,
      "word": "convenient",
      "meaning": "便利な，都合のいい",
      "section": 4
    },
    {
      "no": 396,
      "word": "domestic",
      "meaning": "家庭の；国内の；（動物が）飼いならされた",
      "section": 4
    },
    {
      "no": 397,
      "word": "mass",
      "meaning": "大規模な，大量の；大衆（向け）の",
      "section": 4
    },
    {
      "no": 398,
      "word": "typical",
      "meaning": "典型的な；（～に）特有の（of）",
      "section": 4
    },
    {
      "no": 399,
      "word": "overseas",
      "meaning": "海外へ［に，で］（≒ abroad）",
      "section": 4
    },
    {
      "no": 400,
      "word": "nevertheless",
      "meaning": "それにもかかわらず（≒ nonetheless ⇒ 1000）",
      "section": 4
    },
    {
      "no": 401,
      "word": "demonstrate",
      "meaning": "を論証［証明］する；デモをする",
      "section": 5
    },
    {
      "no": 402,
      "word": "behave",
      "meaning": "振る舞う；作動する",
      "section": 5
    },
    {
      "no": 403,
      "word": "educate",
      "meaning": "を教育する；に教える；（能力など）を養う",
      "section": 5
    },
    {
      "no": 404,
      "word": "purchase",
      "meaning": "を購入する",
      "section": 5
    },
    {
      "no": 405,
      "word": "recommend",
      "meaning": "を勧める",
      "section": 5
    },
    {
      "no": 406,
      "word": "admit",
      "meaning": "（を）（しぶしぶ）認める；に（～への）入場［入学など］を認める（to / into）",
      "section": 5
    },
    {
      "no": 407,
      "word": "generate",
      "meaning": "を生み出す；（電気など）を発生させる",
      "section": 5
    },
    {
      "no": 408,
      "word": "explore",
      "meaning": "（を）調査［探究］する；（を）探検［探査］する",
      "section": 5
    },
    {
      "no": 409,
      "word": "amaze",
      "meaning": "をびっくりさせる",
      "section": 5
    },
    {
      "no": 410,
      "word": "tear",
      "meaning": "を引き裂く；裂ける",
      "section": 5
    },
    {
      "no": 411,
      "word": "settle",
      "meaning": "を解決する；（に）移り住む；を落ち着かせる",
      "section": 5
    },
    {
      "no": 412,
      "word": "afford",
      "meaning": "を持つ［する］余裕がある；を与える",
      "section": 5
    },
    {
      "no": 413,
      "word": "conclude",
      "meaning": "と結論づける；を締めくくる；を締結する",
      "section": 5
    },
    {
      "no": 414,
      "word": "advertise",
      "meaning": "を宣伝する；（～を求める）広告を出す（for）",
      "section": 5
    },
    {
      "no": 415,
      "word": "encounter",
      "meaning": "に遭遇する；に（思いがけず）出会う",
      "section": 5
    },
    {
      "no": 416,
      "word": "remind",
      "meaning": "に思い出させる",
      "section": 5
    },
    {
      "no": 417,
      "word": "locate",
      "meaning": "〔受身形で〕位置する；の位置を探し当てる",
      "section": 5
    },
    {
      "no": 418,
      "word": "aid",
      "meaning": "を援助する，助ける（≒ help）",
      "section": 5
    },
    {
      "no": 419,
      "word": "bite",
      "meaning": "（を）かむ，（に）かみつく；（を）刺す",
      "section": 5
    },
    {
      "no": 420,
      "word": "deliver",
      "meaning": "を配達する；（演説・講義）をする；子を産む",
      "section": 5
    },
    {
      "no": 421,
      "word": "perceive",
      "meaning": "に気づく；を知覚する；を理解する",
      "section": 5
    },
    {
      "no": 422,
      "word": "distinguish",
      "meaning": "を区別する",
      "section": 5
    },
    {
      "no": 423,
      "word": "imply",
      "meaning": "を暗に意味する；を必然的に伴う",
      "section": 5
    },
    {
      "no": 424,
      "word": "handle",
      "meaning": "を処理する，扱う；を論じる；を商う",
      "section": 5
    },
    {
      "no": 425,
      "word": "praise",
      "meaning": "を（～のことで）賞賛する（for）；賛美する",
      "section": 5
    },
    {
      "no": 426,
      "word": "appeal",
      "meaning": "訴える；抗議する；（上級審に）上訴する",
      "section": 5
    },
    {
      "no": 427,
      "word": "insist",
      "meaning": "（を）強く主張する；要求する",
      "section": 5
    },
    {
      "no": 428,
      "word": "compete",
      "meaning": "競う；〔通例否定文で〕（～に）匹敵する（with）",
      "section": 5
    },
    {
      "no": 429,
      "word": "rank",
      "meaning": "を位置づける，評価する；（ある地位に）位置する",
      "section": 5
    },
    {
      "no": 430,
      "word": "deny",
      "meaning": "を否定する；を拒む",
      "section": 5
    },
    {
      "no": 431,
      "word": "reject",
      "meaning": "を拒否する",
      "section": 5
    },
    {
      "no": 432,
      "word": "intend",
      "meaning": "を意図する",
      "section": 5
    },
    {
      "no": 433,
      "word": "expose",
      "meaning": "をさらす；を暴露する；を露出する",
      "section": 5
    },
    {
      "no": 434,
      "word": "favor",
      "meaning": "に賛成する；を好む；をひいきする",
      "section": 5
    },
    {
      "no": 435,
      "word": "inspire",
      "meaning": "（人）を奮起させる；を喚起する",
      "section": 5
    },
    {
      "no": 436,
      "word": "propose",
      "meaning": "を提案する；をもくろむ；結婚を申し込む",
      "section": 5
    },
    {
      "no": 437,
      "word": "spell",
      "meaning": "（語）をつづる；という語になる",
      "section": 5
    },
    {
      "no": 438,
      "word": "breathe",
      "meaning": "呼吸する；を吸う",
      "section": 5
    },
    {
      "no": 439,
      "word": "repair",
      "meaning": "を修理する（≒ fix）；を修復する",
      "section": 5
    },
    {
      "no": 440,
      "word": "consist",
      "meaning": "（～から）成る（of）；（～に）ある（in）",
      "section": 5
    },
    {
      "no": 441,
      "word": "comment",
      "meaning": "意見，コメント；批判",
      "section": 5
    },
    {
      "no": 442,
      "word": "instruction",
      "meaning": "〔通例～s〕指示；〔～s〕（製品の）使用書",
      "section": 5
    },
    {
      "no": 443,
      "word": "religion",
      "meaning": "宗教；信条；信仰（心）",
      "section": 5
    },
    {
      "no": 444,
      "word": "neighborhood",
      "meaning": "地域；近所",
      "section": 5
    },
    {
      "no": 445,
      "word": "laboratory",
      "meaning": "実験室，研究室",
      "section": 5
    },
    {
      "no": 446,
      "word": "presence",
      "meaning": "存在；出席；面前",
      "section": 5
    },
    {
      "no": 447,
      "word": "confidence",
      "meaning": "自信；信頼；秘密",
      "section": 5
    },
    {
      "no": 448,
      "word": "harm",
      "meaning": "害，損害",
      "section": 5
    },
    {
      "no": 449,
      "word": "instrument",
      "meaning": "器具；楽器（≒ musical instrument）",
      "section": 5
    },
    {
      "no": 450,
      "word": "category",
      "meaning": "部類，区分；範疇",
      "section": 5
    },
    {
      "no": 451,
      "word": "capital",
      "meaning": "資本；首都；大文字（≒ capital letter）",
      "section": 5
    },
    {
      "no": 452,
      "word": "outcome",
      "meaning": "結果（≒ result）；成果",
      "section": 5
    },
    {
      "no": 453,
      "word": "notion",
      "meaning": "概念，観念；見解；意向",
      "section": 5
    },
    {
      "no": 454,
      "word": "review",
      "meaning": "（書物などの）論評；再調査；【米】復習",
      "section": 5
    },
    {
      "no": 455,
      "word": "trait",
      "meaning": "特性（≒ feature）",
      "section": 5
    },
    {
      "no": 456,
      "word": "diversity",
      "meaning": "多様性；相違点",
      "section": 5
    },
    {
      "no": 457,
      "word": "victim",
      "meaning": "犠牲（者），被害者",
      "section": 5
    },
    {
      "no": 458,
      "word": "occasion",
      "meaning": "場合，時；行事；機会",
      "section": 5
    },
    {
      "no": 459,
      "word": "facility",
      "meaning": "施設，設備；機能；才能",
      "section": 5
    },
    {
      "no": 460,
      "word": "stock",
      "meaning": "在庫品；蓄え；株",
      "section": 5
    },
    {
      "no": 461,
      "word": "conference",
      "meaning": "会議；協議",
      "section": 5
    },
    {
      "no": 462,
      "word": "humanity",
      "meaning": "人類；人間性；人情；〔（the） ～ties〕人文科学",
      "section": 5
    },
    {
      "no": 463,
      "word": "dialect",
      "meaning": "方言",
      "section": 5
    },
    {
      "no": 464,
      "word": "proportion",
      "meaning": "割合；部分；釣り合い",
      "section": 5
    },
    {
      "no": 465,
      "word": "tip",
      "meaning": "助言，秘訣；チップ；先端",
      "section": 5
    },
    {
      "no": 466,
      "word": "lawyer",
      "meaning": "弁護士",
      "section": 5
    },
    {
      "no": 467,
      "word": "stuff",
      "meaning": "（漠然と）物；素材；素質",
      "section": 5
    },
    {
      "no": 468,
      "word": "comfort",
      "meaning": "快適さ；慰め",
      "section": 5
    },
    {
      "no": 469,
      "word": "philosophy",
      "meaning": "哲学；原理；人生観",
      "section": 5
    },
    {
      "no": 470,
      "word": "mammal",
      "meaning": "哺乳動物",
      "section": 5
    },
    {
      "no": 471,
      "word": "quantity",
      "meaning": "量（⇔ quality ⇒ 69）；分量",
      "section": 5
    },
    {
      "no": 472,
      "word": "landscape",
      "meaning": "風景；領域；状況",
      "section": 5
    },
    {
      "no": 473,
      "word": "tribe",
      "meaning": "部族；仲間",
      "section": 5
    },
    {
      "no": 474,
      "word": "organ",
      "meaning": "器官，臓器；組織；（パイプ）オルガン",
      "section": 5
    },
    {
      "no": 475,
      "word": "trial",
      "meaning": "試み，（品質・性能などの）試験；裁判；試用期間",
      "section": 5
    },
    {
      "no": 476,
      "word": "norm",
      "meaning": "規範；標準",
      "section": 5
    },
    {
      "no": 477,
      "word": "code",
      "meaning": "規範；暗号；法典",
      "section": 5
    },
    {
      "no": 478,
      "word": "substance",
      "meaning": "物質；実体；趣旨",
      "section": 5
    },
    {
      "no": 479,
      "word": "multiple",
      "meaning": "多様な；種々雑多な",
      "section": 5
    },
    {
      "no": 480,
      "word": "numerous",
      "meaning": "非常に数の多い",
      "section": 5
    },
    {
      "no": 481,
      "word": "narrow",
      "meaning": "狭い；細い；限られた",
      "section": 5
    },
    {
      "no": 482,
      "word": "widespread",
      "meaning": "広範囲にわたる；広く普及した",
      "section": 5
    },
    {
      "no": 483,
      "word": "sufficient",
      "meaning": "（～に；...するのに）十分な（for；to do）",
      "section": 5
    },
    {
      "no": 484,
      "word": "proper",
      "meaning": "適切な；正式の；〔名詞の後ろで〕主要な；（～に）固有の（to）",
      "section": 5
    },
    {
      "no": 485,
      "word": "linguistic",
      "meaning": "言語の，言語学の",
      "section": 5
    },
    {
      "no": 486,
      "word": "annual",
      "meaning": "年1回の，例年の；1年間の",
      "section": 5
    },
    {
      "no": 487,
      "word": "contemporary",
      "meaning": "現代の；同時代の；同年輩の",
      "section": 5
    },
    {
      "no": 488,
      "word": "contrary",
      "meaning": "（～と）反対の（to）",
      "section": 5
    },
    {
      "no": 489,
      "word": "strict",
      "meaning": "（規則などが）厳しい；厳格な",
      "section": 5
    },
    {
      "no": 490,
      "word": "civil",
      "meaning": "市民の；民間の；民事の（⇔ criminal 刑事の）",
      "section": 5
    },
    {
      "no": 491,
      "word": "odd",
      "meaning": "奇妙な（≒ strange）；奇数の",
      "section": 5
    },
    {
      "no": 492,
      "word": "unknown",
      "meaning": "不明の；（～に）知られていない（to），無名の",
      "section": 5
    },
    {
      "no": 493,
      "word": "superior",
      "meaning": "よりすぐれた（⇔ inferior ⇒ 1092）",
      "section": 5
    },
    {
      "no": 494,
      "word": "sensitive",
      "meaning": "敏感な；神経質な；微妙な",
      "section": 5
    },
    {
      "no": 495,
      "word": "violent",
      "meaning": "（人・気質などが）激しい；暴力的な",
      "section": 5
    },
    {
      "no": 496,
      "word": "virtual",
      "meaning": "仮想の；事実上の",
      "section": 5
    },
    {
      "no": 497,
      "word": "regardless",
      "meaning": "（～に）かまわない，無頓着な（of）",
      "section": 5
    },
    {
      "no": 498,
      "word": "immediate",
      "meaning": "即座の；当面の；すぐそばの；直接の",
      "section": 5
    },
    {
      "no": 499,
      "word": "crucial",
      "meaning": "重要な",
      "section": 5
    },
    {
      "no": 500,
      "word": "somewhat",
      "meaning": "いくぶん，多少",
      "section": 5
    },
    {
      "no": 501,
      "word": "interpret",
      "meaning": "を解釈する；（を）通訳する",
      "section": 6
    },
    {
      "no": 502,
      "word": "translate",
      "meaning": "を翻訳する；を（～に）変える（into）",
      "section": 6
    },
    {
      "no": 503,
      "word": "concentrate",
      "meaning": "（を）集中する",
      "section": 6
    },
    {
      "no": 504,
      "word": "request",
      "meaning": "に（...するように）頼む（to do）；を要請する",
      "section": 6
    },
    {
      "no": 505,
      "word": "criticize",
      "meaning": "を批判する；を批評する",
      "section": 6
    },
    {
      "no": 506,
      "word": "overcome",
      "meaning": "を克服する",
      "section": 6
    },
    {
      "no": 507,
      "word": "obtain",
      "meaning": "を得る",
      "section": 6
    },
    {
      "no": 508,
      "word": "inform",
      "meaning": "に知らせる；情報を提供する",
      "section": 6
    },
    {
      "no": 509,
      "word": "ensure",
      "meaning": "を確実にする（≒ make sure）；を守る",
      "section": 6
    },
    {
      "no": 510,
      "word": "announce",
      "meaning": "を発表［公表］する，知らせる；（物事が）を告げる",
      "section": 6
    },
    {
      "no": 511,
      "word": "grant",
      "meaning": "（人）に（許可・権利など）を与える；を認める",
      "section": 6
    },
    {
      "no": 512,
      "word": "freeze",
      "meaning": "凍る；を凍らせる；（計画・資金など）を凍結する",
      "section": 6
    },
    {
      "no": 513,
      "word": "oppose",
      "meaning": "に反対する；を対抗［対比］させる",
      "section": 6
    },
    {
      "no": 514,
      "word": "differ",
      "meaning": "異なる",
      "section": 6
    },
    {
      "no": 515,
      "word": "hate",
      "meaning": "をひどく嫌う；を残念に思う",
      "section": 6
    },
    {
      "no": 516,
      "word": "emphasize",
      "meaning": "を強調する；を重視する",
      "section": 6
    },
    {
      "no": 517,
      "word": "employ",
      "meaning": "を雇う（≒ give ～ a job）；を使う（≒ use）",
      "section": 6
    },
    {
      "no": 518,
      "word": "credit",
      "meaning": "（功績など）を（～に）帰する（to）；を信じる",
      "section": 6
    },
    {
      "no": 519,
      "word": "transform",
      "meaning": "を変える；変わる",
      "section": 6
    },
    {
      "no": 520,
      "word": "construct",
      "meaning": "を建設する（＝ build）；を構成する",
      "section": 6
    },
    {
      "no": 521,
      "word": "arise",
      "meaning": "生じる",
      "section": 6
    },
    {
      "no": 522,
      "word": "beat",
      "meaning": "を打ち負かす；（を）打つ，たたく",
      "section": 6
    },
    {
      "no": 523,
      "word": "regret",
      "meaning": "を後悔する",
      "section": 6
    },
    {
      "no": 524,
      "word": "alter",
      "meaning": "を変える；変わる（≒ change）",
      "section": 6
    },
    {
      "no": 525,
      "word": "absorb",
      "meaning": "を吸収する；を併合する；を夢中にさせる",
      "section": 6
    },
    {
      "no": 526,
      "word": "disappoint",
      "meaning": "を失望させる；（希望など）をくじく",
      "section": 6
    },
    {
      "no": 527,
      "word": "cure",
      "meaning": "を治す；を取り除く；（病気が）治る",
      "section": 6
    },
    {
      "no": 528,
      "word": "transport",
      "meaning": "を輸送する；を運ぶ",
      "section": 6
    },
    {
      "no": 529,
      "word": "rush",
      "meaning": "急いで行く；性急に行動する；をせき立てる",
      "section": 6
    },
    {
      "no": 530,
      "word": "hang",
      "meaning": "を掛ける；を絞首刑にする；垂れ（下が）る",
      "section": 6
    },
    {
      "no": 531,
      "word": "blame",
      "meaning": "を責める；の責任を負わせる",
      "section": 6
    },
    {
      "no": 532,
      "word": "ban",
      "meaning": "を（法的に）禁止する；を締め出す",
      "section": 6
    },
    {
      "no": 533,
      "word": "fascinate",
      "meaning": "を魅了する",
      "section": 6
    },
    {
      "no": 534,
      "word": "recover",
      "meaning": "回復する；を取り戻す",
      "section": 6
    },
    {
      "no": 535,
      "word": "celebrate",
      "meaning": "を祝う；を挙行する",
      "section": 6
    },
    {
      "no": 536,
      "word": "manufacture",
      "meaning": "を製造する；をでっち上げる",
      "section": 6
    },
    {
      "no": 537,
      "word": "interact",
      "meaning": "影響し合う；相互に作用する",
      "section": 6
    },
    {
      "no": 538,
      "word": "arrange",
      "meaning": "の段取りをつける；を手配する；を配置する",
      "section": 6
    },
    {
      "no": 539,
      "word": "adjust",
      "meaning": "を調整する；を適合させる；順応する",
      "section": 6
    },
    {
      "no": 540,
      "word": "confirm",
      "meaning": "を確認する；を裏づける",
      "section": 6
    },
    {
      "no": 541,
      "word": "insight",
      "meaning": "見識，理解（力）；洞察力",
      "section": 6
    },
    {
      "no": 542,
      "word": "innovation",
      "meaning": "革新；新機軸",
      "section": 6
    },
    {
      "no": 543,
      "word": "budget",
      "meaning": "予算；経費",
      "section": 6
    },
    {
      "no": 544,
      "word": "fee",
      "meaning": "料金；謝礼",
      "section": 6
    },
    {
      "no": 545,
      "word": "expense",
      "meaning": "〔～s〕経費；費用；犠牲",
      "section": 6
    },
    {
      "no": 546,
      "word": "debt",
      "meaning": "借金，負債；恩義",
      "section": 6
    },
    {
      "no": 547,
      "word": "loan",
      "meaning": "貸付金，融資；貸すこと",
      "section": 6
    },
    {
      "no": 548,
      "word": "duty",
      "meaning": "義務；〔しばしば～ties〕職務；関税",
      "section": 6
    },
    {
      "no": 549,
      "word": "alarm",
      "meaning": "不安，恐れ；警報装置",
      "section": 6
    },
    {
      "no": 550,
      "word": "emergency",
      "meaning": "緊急（事態）",
      "section": 6
    },
    {
      "no": 551,
      "word": "democracy",
      "meaning": "民主主義，民主政治；民主国家",
      "section": 6
    },
    {
      "no": 552,
      "word": "minister",
      "meaning": "大臣；（プロテスタント系の）聖職者",
      "section": 6
    },
    {
      "no": 553,
      "word": "fellow",
      "meaning": "仲間，同僚；同級生；男",
      "section": 6
    },
    {
      "no": 554,
      "word": "candidate",
      "meaning": "（～の）候補（者）（for）；志願者",
      "section": 6
    },
    {
      "no": 555,
      "word": "corporation",
      "meaning": "（大）企業；法人",
      "section": 6
    },
    {
      "no": 556,
      "word": "stereotype",
      "meaning": "固定観念；決まり文句",
      "section": 6
    },
    {
      "no": 557,
      "word": "route",
      "meaning": "道（筋）；路線，ルート；（～の）手段（to）",
      "section": 6
    },
    {
      "no": 558,
      "word": "disorder",
      "meaning": "障害，（心身の）不調；混乱",
      "section": 6
    },
    {
      "no": 559,
      "word": "depression",
      "meaning": "憂うつ；うつ病；不況；低気圧",
      "section": 6
    },
    {
      "no": 560,
      "word": "weapon",
      "meaning": "兵器，武器（≒ arms）",
      "section": 6
    },
    {
      "no": 561,
      "word": "immigration",
      "meaning": "（他国からの）移民，移住；入国管理",
      "section": 6
    },
    {
      "no": 562,
      "word": "barrier",
      "meaning": "（～に対する）障壁（against / to）；防壁",
      "section": 6
    },
    {
      "no": 563,
      "word": "disadvantage",
      "meaning": "不利（な点）；障害；（信用などの）損失",
      "section": 6
    },
    {
      "no": 564,
      "word": "mood",
      "meaning": "気分；機嫌；雰囲気",
      "section": 6
    },
    {
      "no": 565,
      "word": "motion",
      "meaning": "動き，動作；運動；動議",
      "section": 6
    },
    {
      "no": 566,
      "word": "routine",
      "meaning": "決まり切った仕事；いつもの手順",
      "section": 6
    },
    {
      "no": 567,
      "word": "discipline",
      "meaning": "規律，しつけ；訓練；懲戒；学問分野",
      "section": 6
    },
    {
      "no": 568,
      "word": "myth",
      "meaning": "作り話；神話",
      "section": 6
    },
    {
      "no": 569,
      "word": "hypothesis",
      "meaning": "仮説；憶測",
      "section": 6
    },
    {
      "no": 570,
      "word": "physician",
      "meaning": "【主に米】 医師（≒ doctor）；内科医",
      "section": 6
    },
    {
      "no": 571,
      "word": "client",
      "meaning": "顧客（≒ customer）；（弁護士などの）依頼人",
      "section": 6
    },
    {
      "no": 572,
      "word": "colony",
      "meaning": "植民地；集団居住地；（動植物の）コロニー",
      "section": 6
    },
    {
      "no": 573,
      "word": "statistics",
      "meaning": "統計；統計学",
      "section": 6
    },
    {
      "no": 574,
      "word": "grain",
      "meaning": "穀物；粒；きめ",
      "section": 6
    },
    {
      "no": 575,
      "word": "ingredient",
      "meaning": "材料，成分；（成功の）要因",
      "section": 6
    },
    {
      "no": 576,
      "word": "treasure",
      "meaning": "宝物，財宝；財産",
      "section": 6
    },
    {
      "no": 577,
      "word": "contract",
      "meaning": "契約（書）；協定",
      "section": 6
    },
    {
      "no": 578,
      "word": "welfare",
      "meaning": "福祉，幸福",
      "section": 6
    },
    {
      "no": 579,
      "word": "prime",
      "meaning": "主要な，最も重要な；最適な；極上の",
      "section": 6
    },
    {
      "no": 580,
      "word": "curious",
      "meaning": "好奇心の強い；奇妙な",
      "section": 6
    },
    {
      "no": 581,
      "word": "dramatic",
      "meaning": "劇的な；演劇の",
      "section": 6
    },
    {
      "no": 582,
      "word": "distinct",
      "meaning": "明らかに異なる；明瞭な",
      "section": 6
    },
    {
      "no": 583,
      "word": "anxious",
      "meaning": "心配して；切望して",
      "section": 6
    },
    {
      "no": 584,
      "word": "vital",
      "meaning": "必要不可欠な；活気のある；生命にかかわる",
      "section": 6
    },
    {
      "no": 585,
      "word": "conventional",
      "meaning": "従来の；月並みな",
      "section": 6
    },
    {
      "no": 586,
      "word": "abstract",
      "meaning": "抽象的な（⇔ concrete ⇒ 783）",
      "section": 6
    },
    {
      "no": 587,
      "word": "minor",
      "meaning": "重要でない；小さい（⇔ major ⇒ 88）",
      "section": 6
    },
    {
      "no": 588,
      "word": "extraordinary",
      "meaning": "並はずれた；異常な，驚くべき",
      "section": 6
    },
    {
      "no": 589,
      "word": "stable",
      "meaning": "安定した（⇔ unstable 不安定な）；動じない",
      "section": 6
    },
    {
      "no": 590,
      "word": "flexible",
      "meaning": "融通の利く，柔軟な",
      "section": 6
    },
    {
      "no": 591,
      "word": "brief",
      "meaning": "簡潔な；短い",
      "section": 6
    },
    {
      "no": 592,
      "word": "aggressive",
      "meaning": "攻撃的な；意欲的な",
      "section": 6
    },
    {
      "no": 593,
      "word": "visible",
      "meaning": "（目に）見える（⇔ invisible 見えない）；明白な",
      "section": 6
    },
    {
      "no": 594,
      "word": "unexpected",
      "meaning": "思いがけない，不意の",
      "section": 6
    },
    {
      "no": 595,
      "word": "ethnic",
      "meaning": "民族の，人種の；民族特有の",
      "section": 6
    },
    {
      "no": 596,
      "word": "alien",
      "meaning": "（～にとって）異質の（to）；外国の；宇宙人の",
      "section": 6
    },
    {
      "no": 597,
      "word": "initial",
      "meaning": "初めの",
      "section": 6
    },
    {
      "no": 598,
      "word": "exact",
      "meaning": "正確な；まさにその",
      "section": 6
    },
    {
      "no": 599,
      "word": "precise",
      "meaning": "正確な（≒ exact）；精密な；まさにその",
      "section": 6
    },
    {
      "no": 600,
      "word": "latter",
      "meaning": "後者の（⇔ former 前者の），後半の",
      "section": 6
    },
    {
      "no": 601,
      "word": "commit",
      "meaning": "〔commit oneselfまたは受身形で〕献身する；（罪など）を犯す；を投入する",
      "section": 7
    },
    {
      "no": 602,
      "word": "stimulate",
      "meaning": "を刺激する",
      "section": 7
    },
    {
      "no": 603,
      "word": "enhance",
      "meaning": "（価値など）を高める，増す",
      "section": 7
    },
    {
      "no": 604,
      "word": "pursue",
      "meaning": "を追求する；に従事する",
      "section": 7
    },
    {
      "no": 605,
      "word": "react",
      "meaning": "反応する；化学反応を起こす",
      "section": 7
    },
    {
      "no": 606,
      "word": "disagree",
      "meaning": "不賛成である；意見が食い違う",
      "section": 7
    },
    {
      "no": 607,
      "word": "stare",
      "meaning": "じっと見る；を見つめる",
      "section": 7
    },
    {
      "no": 608,
      "word": "abandon",
      "meaning": "を捨てる；を放棄する，断念する",
      "section": 7
    },
    {
      "no": 609,
      "word": "quit",
      "meaning": "をやめる；（場所）を去る",
      "section": 7
    },
    {
      "no": 610,
      "word": "capture",
      "meaning": "をとらえる；をとりこにする",
      "section": 7
    },
    {
      "no": 611,
      "word": "transfer",
      "meaning": "を移す；を伝える；移る；乗り換える",
      "section": 7
    },
    {
      "no": 612,
      "word": "bother",
      "meaning": "を悩ます；（～を）気にかける（about / with）",
      "section": 7
    },
    {
      "no": 613,
      "word": "persuade",
      "meaning": "を説得する；に確信させる",
      "section": 7
    },
    {
      "no": 614,
      "word": "rent",
      "meaning": "を賃借りする；を賃貸しする",
      "section": 7
    },
    {
      "no": 615,
      "word": "breed",
      "meaning": "を繁殖させる，育てる；繁殖する",
      "section": 7
    },
    {
      "no": 616,
      "word": "invest",
      "meaning": "（を）投資する；に（～を）与える（with）",
      "section": 7
    },
    {
      "no": 617,
      "word": "reserve",
      "meaning": "を予約する；を取っておく；（判断など）を保留する",
      "section": 7
    },
    {
      "no": 618,
      "word": "trace",
      "meaning": "（足跡・起源など）をたどる；を捜し出す",
      "section": 7
    },
    {
      "no": 619,
      "word": "illustrate",
      "meaning": "を説明する；に挿絵を入れる",
      "section": 7
    },
    {
      "no": 620,
      "word": "advise",
      "meaning": "に忠告［助言］する；（を）助言する",
      "section": 7
    },
    {
      "no": 621,
      "word": "convey",
      "meaning": "を伝える；を運ぶ，運搬する",
      "section": 7
    },
    {
      "no": 622,
      "word": "attach",
      "meaning": "を（取り）付ける；を付与する",
      "section": 7
    },
    {
      "no": 623,
      "word": "stretch",
      "meaning": "を伸ばす；を広げる；伸びる；及ぶ",
      "section": 7
    },
    {
      "no": 624,
      "word": "puzzle",
      "meaning": "を当惑させる",
      "section": 7
    },
    {
      "no": 625,
      "word": "disturb",
      "meaning": "をかき乱す；を妨害する；を動揺させる",
      "section": 7
    },
    {
      "no": 626,
      "word": "crash",
      "meaning": "衝突する，墜落する；をぶつけて壊す",
      "section": 7
    },
    {
      "no": 627,
      "word": "cope",
      "meaning": "うまく処理する",
      "section": 7
    },
    {
      "no": 628,
      "word": "permit",
      "meaning": "を許可する（≒ allow）（⇔ forbid ⇒ 1013）",
      "section": 7
    },
    {
      "no": 629,
      "word": "impress",
      "meaning": "を感動させる；に印象を与える",
      "section": 7
    },
    {
      "no": 630,
      "word": "suspect",
      "meaning": "ではないかと思う；（人）を疑う",
      "section": 7
    },
    {
      "no": 631,
      "word": "upset",
      "meaning": "を動揺させる；をだめにする",
      "section": 7
    },
    {
      "no": 632,
      "word": "frighten",
      "meaning": "（人）を怖がらせる",
      "section": 7
    },
    {
      "no": 633,
      "word": "import",
      "meaning": "を輸入する（⇔ export （を）輸出する）；を取り込む",
      "section": 7
    },
    {
      "no": 634,
      "word": "export",
      "meaning": "（を）輸出する（⇔ import を輸入する）",
      "section": 7
    },
    {
      "no": 635,
      "word": "investigate",
      "meaning": "を調査する；を究明する；（～を）調査する（into）",
      "section": 7
    },
    {
      "no": 636,
      "word": "monitor",
      "meaning": "を監視する；を傍受する",
      "section": 7
    },
    {
      "no": 637,
      "word": "calculate",
      "meaning": "を計算する；を予測する",
      "section": 7
    },
    {
      "no": 638,
      "word": "eliminate",
      "meaning": "を取り除く",
      "section": 7
    },
    {
      "no": 639,
      "word": "ease",
      "meaning": "を軽減する；和らぐ；緩む",
      "section": 7
    },
    {
      "no": 640,
      "word": "launch",
      "meaning": "を開始する；を売り出す；を発射する",
      "section": 7
    },
    {
      "no": 641,
      "word": "sequence",
      "meaning": "連続；一連（のもの）",
      "section": 7
    },
    {
      "no": 642,
      "word": "therapy",
      "meaning": "療法；心理療法",
      "section": 7
    },
    {
      "no": 643,
      "word": "symptom",
      "meaning": "症状；兆候（≒ sign）",
      "section": 7
    },
    {
      "no": 644,
      "word": "incident",
      "meaning": "出来事，事件；紛争",
      "section": 7
    },
    {
      "no": 645,
      "word": "witness",
      "meaning": "目撃者（≒ eyewitness）；証人；証拠，証言",
      "section": 7
    },
    {
      "no": 646,
      "word": "sum",
      "meaning": "（金）額；合計；要点",
      "section": 7
    },
    {
      "no": 647,
      "word": "burden",
      "meaning": "負担；（重い）義務；積み荷",
      "section": 7
    },
    {
      "no": 648,
      "word": "tone",
      "meaning": "口調；音色；雰囲気；色調",
      "section": 7
    },
    {
      "no": 649,
      "word": "honor",
      "meaning": "光栄；名誉（⇔ dishonor 不名誉）；敬意",
      "section": 7
    },
    {
      "no": 650,
      "word": "award",
      "meaning": "（～の）賞（for）；（証書などの）授与",
      "section": 7
    },
    {
      "no": 651,
      "word": "priority",
      "meaning": "優先（事項）",
      "section": 7
    },
    {
      "no": 652,
      "word": "logic",
      "meaning": "論理；道理；論理学",
      "section": 7
    },
    {
      "no": 653,
      "word": "minimum",
      "meaning": "最小限度（⇔ maximum ⇒ 965）",
      "section": 7
    },
    {
      "no": 654,
      "word": "exception",
      "meaning": "（～の）例外（to）",
      "section": 7
    },
    {
      "no": 655,
      "word": "clue",
      "meaning": "（～の）手がかり（to / about）；（パズルの）ヒント",
      "section": 7
    },
    {
      "no": 656,
      "word": "bond",
      "meaning": "絆；債券；束縛；接着剤",
      "section": 7
    },
    {
      "no": 657,
      "word": "virus",
      "meaning": "ウイルス；（感染症の）病原体",
      "section": 7
    },
    {
      "no": 658,
      "word": "surgery",
      "meaning": "（外科）手術；外科，外科医学",
      "section": 7
    },
    {
      "no": 659,
      "word": "insurance",
      "meaning": "保険；保険料；保険金",
      "section": 7
    },
    {
      "no": 660,
      "word": "frame",
      "meaning": "枠，（額）縁；骨組み；体格",
      "section": 7
    },
    {
      "no": 661,
      "word": "shelter",
      "meaning": "避難（所），保護",
      "section": 7
    },
    {
      "no": 662,
      "word": "territory",
      "meaning": "領土；（活動の）領域；（動物の）テリトリー",
      "section": 7
    },
    {
      "no": 663,
      "word": "boundary",
      "meaning": "境界（線）；〔通例～ries〕限界",
      "section": 7
    },
    {
      "no": 664,
      "word": "habitat",
      "meaning": "生息地；（人の）居住地",
      "section": 7
    },
    {
      "no": 665,
      "word": "district",
      "meaning": "地区；行政区",
      "section": 7
    },
    {
      "no": 666,
      "word": "conservation",
      "meaning": "（動植物などの）保護；保存",
      "section": 7
    },
    {
      "no": 667,
      "word": "harvest",
      "meaning": "収穫（物）；収穫期；漁獲高",
      "section": 7
    },
    {
      "no": 668,
      "word": "predator",
      "meaning": "捕食動物；略奪者",
      "section": 7
    },
    {
      "no": 669,
      "word": "trap",
      "meaning": "わな；苦境",
      "section": 7
    },
    {
      "no": 670,
      "word": "trick",
      "meaning": "こつ；策略；いたずら；芸当",
      "section": 7
    },
    {
      "no": 671,
      "word": "fault",
      "meaning": "〔通例one",
      "section": 7
    },
    {
      "no": 672,
      "word": "discount",
      "meaning": "割引",
      "section": 7
    },
    {
      "no": 673,
      "word": "bias",
      "meaning": "偏見；傾向",
      "section": 7
    },
    {
      "no": 674,
      "word": "cooperation",
      "meaning": "協力，共同",
      "section": 7
    },
    {
      "no": 675,
      "word": "patent",
      "meaning": "特許（権）；特許品",
      "section": 7
    },
    {
      "no": 676,
      "word": "dialogue",
      "meaning": "対話，会話；意見の交換",
      "section": 7
    },
    {
      "no": 677,
      "word": "component",
      "meaning": "構成要素；部品",
      "section": 7
    },
    {
      "no": 678,
      "word": "reputation",
      "meaning": "評判；名声",
      "section": 7
    },
    {
      "no": 679,
      "word": "verbal",
      "meaning": "言葉の；口頭での；動詞の",
      "section": 7
    },
    {
      "no": 680,
      "word": "internal",
      "meaning": "内部の（⇔ external ⇒ 989）；国内の；内面的な",
      "section": 7
    },
    {
      "no": 681,
      "word": "solid",
      "meaning": "しっかりした；硬い；固体の",
      "section": 7
    },
    {
      "no": 682,
      "word": "remote",
      "meaning": "（～から）遠く離れた（from）；かけ離れた",
      "section": 7
    },
    {
      "no": 683,
      "word": "principal",
      "meaning": "主要な；資本金の",
      "section": 7
    },
    {
      "no": 684,
      "word": "sophisticated",
      "meaning": "高性能の，精巧な；洗練された",
      "section": 7
    },
    {
      "no": 685,
      "word": "equivalent",
      "meaning": "等しい，相当する",
      "section": 7
    },
    {
      "no": 686,
      "word": "rational",
      "meaning": "理性的な；合理的な",
      "section": 7
    },
    {
      "no": 687,
      "word": "relevant",
      "meaning": "関係がある；適切な",
      "section": 7
    },
    {
      "no": 688,
      "word": "absolute",
      "meaning": "絶対的な（⇔ relative 相対的な）",
      "section": 7
    },
    {
      "no": 689,
      "word": "frequent",
      "meaning": "頻繁な",
      "section": 7
    },
    {
      "no": 690,
      "word": "permanent",
      "meaning": "永続的な（⇔ temporary ⇒ 793）",
      "section": 7
    },
    {
      "no": 691,
      "word": "intense",
      "meaning": "強烈な；熱烈な",
      "section": 7
    },
    {
      "no": 692,
      "word": "meaningful",
      "meaning": "意味のある",
      "section": 7
    },
    {
      "no": 693,
      "word": "evil",
      "meaning": "邪悪な；有害な",
      "section": 7
    },
    {
      "no": 694,
      "word": "extinct",
      "meaning": "絶滅した；廃止された",
      "section": 7
    },
    {
      "no": 695,
      "word": "random",
      "meaning": "無作為の；手当たり次第の",
      "section": 7
    },
    {
      "no": 696,
      "word": "raw",
      "meaning": "生の；未加工の",
      "section": 7
    },
    {
      "no": 697,
      "word": "rude",
      "meaning": "無礼な（⇔ polite 礼儀正しい）；粗野な",
      "section": 7
    },
    {
      "no": 698,
      "word": "mere",
      "meaning": "単なる，ほんの",
      "section": 7
    },
    {
      "no": 699,
      "word": "tropical",
      "meaning": "熱帯の",
      "section": 7
    },
    {
      "no": 700,
      "word": "forth",
      "meaning": "前へ，先へ；それ以降",
      "section": 7
    },
    {
      "no": 701,
      "word": "possess",
      "meaning": "を所有している；の心をとらえる",
      "section": 8
    },
    {
      "no": 702,
      "word": "dominate",
      "meaning": "を支配する；（～より）優勢である（over）",
      "section": 8
    },
    {
      "no": 703,
      "word": "guarantee",
      "meaning": "を保証する",
      "section": 8
    },
    {
      "no": 704,
      "word": "melt",
      "meaning": "溶ける；なごむ；を溶かす",
      "section": 8
    },
    {
      "no": 705,
      "word": "embarrass",
      "meaning": "に恥ずかしい思いをさせる",
      "section": 8
    },
    {
      "no": 706,
      "word": "discourage",
      "meaning": "（人）にやる気をなくさせる；を落胆させる（⇔ encourage ⇒ 30）",
      "section": 8
    },
    {
      "no": 707,
      "word": "detect",
      "meaning": "を感知する；を見つけ出す；に気づく",
      "section": 8
    },
    {
      "no": 708,
      "word": "devote",
      "meaning": "をささげる",
      "section": 8
    },
    {
      "no": 709,
      "word": "urge",
      "meaning": "に（強く）促す；を強く主張する；を駆り立てる",
      "section": 8
    },
    {
      "no": 710,
      "word": "lend",
      "meaning": "を貸す（⇔ borrow を借りる）；（人）に（助言・援助など）を与える",
      "section": 8
    },
    {
      "no": 711,
      "word": "restrict",
      "meaning": "を制限する",
      "section": 8
    },
    {
      "no": 712,
      "word": "isolate",
      "meaning": "を孤立させる",
      "section": 8
    },
    {
      "no": 713,
      "word": "accompany",
      "meaning": "に同行する；に付随する",
      "section": 8
    },
    {
      "no": 714,
      "word": "exhaust",
      "meaning": "を疲れ果てさせる；を使い尽くす；排気する",
      "section": 8
    },
    {
      "no": 715,
      "word": "annoy",
      "meaning": "を悩ます；〔受身形で〕腹が立つ",
      "section": 8
    },
    {
      "no": 716,
      "word": "endanger",
      "meaning": "を危険にさらす",
      "section": 8
    },
    {
      "no": 717,
      "word": "acknowledge",
      "meaning": "（事実など）を認める（≒ admit ⇒ 406）；に謝意を表す",
      "section": 8
    },
    {
      "no": 718,
      "word": "admire",
      "meaning": "に（～のことで）敬服［感心］する（for）",
      "section": 8
    },
    {
      "no": 719,
      "word": "evaluate",
      "meaning": "を評価する；を査定する",
      "section": 8
    },
    {
      "no": 720,
      "word": "declare",
      "meaning": "を宣言する；を申告する",
      "section": 8
    },
    {
      "no": 721,
      "word": "secure",
      "meaning": "を確保する；を守る",
      "section": 8
    },
    {
      "no": 722,
      "word": "specialize",
      "meaning": "専門とする；【英】（～を）専攻する（in）（≒ 【米】major）",
      "section": 8
    },
    {
      "no": 723,
      "word": "attribute",
      "meaning": "（結果など）を（～に）帰する（to）",
      "section": 8
    },
    {
      "no": 724,
      "word": "pretend",
      "meaning": "（の）ふりをする",
      "section": 8
    },
    {
      "no": 725,
      "word": "bury",
      "meaning": "を埋める；を埋葬する；を隠す",
      "section": 8
    },
    {
      "no": 726,
      "word": "reverse",
      "meaning": "を逆転させる；を反対にする",
      "section": 8
    },
    {
      "no": 727,
      "word": "resist",
      "meaning": "に抵抗する；〔通例否定文で〕を我慢する",
      "section": 8
    },
    {
      "no": 728,
      "word": "scare",
      "meaning": "をおびえさせる；を脅す",
      "section": 8
    },
    {
      "no": 729,
      "word": "imitate",
      "meaning": "をまねる；を模造する",
      "section": 8
    },
    {
      "no": 730,
      "word": "assist",
      "meaning": "（を）援助する；を手伝う",
      "section": 8
    },
    {
      "no": 731,
      "word": "resemble",
      "meaning": "に似ている",
      "section": 8
    },
    {
      "no": 732,
      "word": "retire",
      "meaning": "（～から）引退する，退職する（from）；退く",
      "section": 8
    },
    {
      "no": 733,
      "word": "neglect",
      "meaning": "をおろそかにする，怠る；を無視する",
      "section": 8
    },
    {
      "no": 734,
      "word": "collapse",
      "meaning": "崩壊する；（人が）倒れる；を折り畳む",
      "section": 8
    },
    {
      "no": 735,
      "word": "reform",
      "meaning": "を改革する；を改心させる",
      "section": 8
    },
    {
      "no": 736,
      "word": "protest",
      "meaning": "（に）抗議する；を主張する",
      "section": 8
    },
    {
      "no": 737,
      "word": "owe",
      "meaning": "に借りがある；のおかげである",
      "section": 8
    },
    {
      "no": 738,
      "word": "sustain",
      "meaning": "を持続させる；を支える",
      "section": 8
    },
    {
      "no": 739,
      "word": "assign",
      "meaning": "を割り当てる；を（～に）配属する（to）",
      "section": 8
    },
    {
      "no": 740,
      "word": "accomplish",
      "meaning": "を成し遂げる",
      "section": 8
    },
    {
      "no": 741,
      "word": "wisdom",
      "meaning": "知恵；賢明さ；学識",
      "section": 8
    },
    {
      "no": 742,
      "word": "literacy",
      "meaning": "読み書きの能力；（特定分野の）知識",
      "section": 8
    },
    {
      "no": 743,
      "word": "heritage",
      "meaning": "遺産",
      "section": 8
    },
    {
      "no": 744,
      "word": "mission",
      "meaning": "使命；（外交）使節団；布教",
      "section": 8
    },
    {
      "no": 745,
      "word": "license",
      "meaning": "免許（証）；許可",
      "section": 8
    },
    {
      "no": 746,
      "word": "elite",
      "meaning": "〔通例the ～〕〔集合的に〕エリート",
      "section": 8
    },
    {
      "no": 747,
      "word": "layer",
      "meaning": "層",
      "section": 8
    },
    {
      "no": 748,
      "word": "motor",
      "meaning": "モーター；原動力",
      "section": 8
    },
    {
      "no": 749,
      "word": "protein",
      "meaning": "たんぱく質",
      "section": 8
    },
    {
      "no": 750,
      "word": "profession",
      "meaning": "職業；専門職；同業者仲間",
      "section": 8
    },
    {
      "no": 751,
      "word": "editor",
      "meaning": "編集者；編集長",
      "section": 8
    },
    {
      "no": 752,
      "word": "agent",
      "meaning": "仲介者，代理人；薬剤",
      "section": 8
    },
    {
      "no": 753,
      "word": "globe",
      "meaning": "地球（≒ earth）；世界；球",
      "section": 8
    },
    {
      "no": 754,
      "word": "haven",
      "meaning": "避難所，保護区；港",
      "section": 8
    },
    {
      "no": 755,
      "word": "row",
      "meaning": "列；（建物が並ぶ）通り",
      "section": 8
    },
    {
      "no": 756,
      "word": "sacrifice",
      "meaning": "犠牲；いけにえ",
      "section": 8
    },
    {
      "no": 757,
      "word": "means",
      "meaning": "〔単数・複数扱い〕手段；〔複数扱い〕資力，収入",
      "section": 8
    },
    {
      "no": 758,
      "word": "session",
      "meaning": "集まり；（議会の）会期；（開会中の）議会",
      "section": 8
    },
    {
      "no": 759,
      "word": "league",
      "meaning": "（競技）連盟；同盟",
      "section": 8
    },
    {
      "no": 760,
      "word": "contest",
      "meaning": "コンテスト，競技（会）；争い",
      "section": 8
    },
    {
      "no": 761,
      "word": "guard",
      "meaning": "警備員；警備隊；監視，警戒",
      "section": 8
    },
    {
      "no": 762,
      "word": "opponent",
      "meaning": "（試合・論争などの）相手；反対者",
      "section": 8
    },
    {
      "no": 763,
      "word": "glance",
      "meaning": "（～を）ちらっと見ること（at）",
      "section": 8
    },
    {
      "no": 764,
      "word": "divorce",
      "meaning": "離婚；分離",
      "section": 8
    },
    {
      "no": 765,
      "word": "tissue",
      "meaning": "（生物の）組織；ティッシュペーパー",
      "section": 8
    },
    {
      "no": 766,
      "word": "liquid",
      "meaning": "液体",
      "section": 8
    },
    {
      "no": 767,
      "word": "inequality",
      "meaning": "不平等；不公平な事柄",
      "section": 8
    },
    {
      "no": 768,
      "word": "prejudice",
      "meaning": "（～に対する）偏見（against）（≒ bias）",
      "section": 8
    },
    {
      "no": 769,
      "word": "justice",
      "meaning": "公正，正義；司法",
      "section": 8
    },
    {
      "no": 770,
      "word": "guideline",
      "meaning": "指針，ガイドライン；指導基準",
      "section": 8
    },
    {
      "no": 771,
      "word": "platform",
      "meaning": "プラットフォーム；演壇；舞台",
      "section": 8
    },
    {
      "no": 772,
      "word": "sector",
      "meaning": "（社会・経済などの）部門，セクター；（都市内の）地域",
      "section": 8
    },
    {
      "no": 773,
      "word": "channel",
      "meaning": "チャンネル；伝達経路；海峡",
      "section": 8
    },
    {
      "no": 774,
      "word": "glacier",
      "meaning": "氷河",
      "section": 8
    },
    {
      "no": 775,
      "word": "primate",
      "meaning": "霊長目の動物",
      "section": 8
    },
    {
      "no": 776,
      "word": "usage",
      "meaning": "（使）用法；語法；習慣",
      "section": 8
    },
    {
      "no": 777,
      "word": "fortune",
      "meaning": "財産；幸運（≒ luck）；運命",
      "section": 8
    },
    {
      "no": 778,
      "word": "correlation",
      "meaning": "相互関係，相関（関係）",
      "section": 8
    },
    {
      "no": 779,
      "word": "artistic",
      "meaning": "芸術的な",
      "section": 8
    },
    {
      "no": 780,
      "word": "literary",
      "meaning": "文学の；文語の（⇔ colloquial 口語体の）",
      "section": 8
    },
    {
      "no": 781,
      "word": "classic",
      "meaning": "第一級の；典型的な；定番の",
      "section": 8
    },
    {
      "no": 782,
      "word": "liberal",
      "meaning": "自由主義の；寛大な；一般教養の",
      "section": 8
    },
    {
      "no": 783,
      "word": "concrete",
      "meaning": "具体的な（⇔ abstract ⇒ 586）；有形の",
      "section": 8
    },
    {
      "no": 784,
      "word": "slight",
      "meaning": "わずかな；取るに足らない",
      "section": 8
    },
    {
      "no": 785,
      "word": "federal",
      "meaning": "連邦（政府）の",
      "section": 8
    },
    {
      "no": 786,
      "word": "primitive",
      "meaning": "原始的な；未開の",
      "section": 8
    },
    {
      "no": 787,
      "word": "unfamiliar",
      "meaning": "（～に）不慣れな（with）；（～に）（よく）知られていない（to）",
      "section": 8
    },
    {
      "no": 788,
      "word": "subtle",
      "meaning": "微妙な；（気体などが）希薄な",
      "section": 8
    },
    {
      "no": 789,
      "word": "plain",
      "meaning": "明らかな；平易な；飾りのない；率直な",
      "section": 8
    },
    {
      "no": 790,
      "word": "marine",
      "meaning": "海の；船舶の",
      "section": 8
    },
    {
      "no": 791,
      "word": "apparent",
      "meaning": "明白な；一見～らしい",
      "section": 8
    },
    {
      "no": 792,
      "word": "reluctant",
      "meaning": "気が進まない，嫌がる（⇔ willing ⇒ 298）",
      "section": 8
    },
    {
      "no": 793,
      "word": "temporary",
      "meaning": "一時的な（⇔ permanent ⇒ 690）",
      "section": 8
    },
    {
      "no": 794,
      "word": "guilty",
      "meaning": "罪悪感のある；（～について）有罪の（of）",
      "section": 8
    },
    {
      "no": 795,
      "word": "royal",
      "meaning": "王の",
      "section": 8
    },
    {
      "no": 796,
      "word": "pure",
      "meaning": "純粋な；潔白な；まったくの",
      "section": 8
    },
    {
      "no": 797,
      "word": "incredible",
      "meaning": "信じられない；すばらしい",
      "section": 8
    },
    {
      "no": 798,
      "word": "eager",
      "meaning": "（～を）熱望して（for）；熱心な",
      "section": 8
    },
    {
      "no": 799,
      "word": "adequate",
      "meaning": "十分な；適切な（⇔ inadequate 不適切な）",
      "section": 8
    },
    {
      "no": 800,
      "word": "via",
      "meaning": "～経由で；～の媒介で",
      "section": 8
    },
    {
      "no": 801,
      "word": "assess",
      "meaning": "を評価する；を査定する",
      "section": 9
    },
    {
      "no": 802,
      "word": "approve",
      "meaning": "賛成する；を承認する",
      "section": 9
    },
    {
      "no": 803,
      "word": "remark",
      "meaning": "と述べる；（～について）意見を述べる（on / upon）",
      "section": 9
    },
    {
      "no": 804,
      "word": "pose",
      "meaning": "（危険）を引き起こす；（問題など）を提起する；ポーズをとる；（～を）装う（as）",
      "section": 9
    },
    {
      "no": 805,
      "word": "yield",
      "meaning": "をもたらす；を（～に）譲る（to）；（～に）屈する（to）",
      "section": 9
    },
    {
      "no": 806,
      "word": "exhibit",
      "meaning": "を示す，見せる；を展示する",
      "section": 9
    },
    {
      "no": 807,
      "word": "distribute",
      "meaning": "を（～に）分配する（to）；〔受身形で〕分布する",
      "section": 9
    },
    {
      "no": 808,
      "word": "command",
      "meaning": "を命じる；を指揮する；（景色）を見渡せる",
      "section": 9
    },
    {
      "no": 809,
      "word": "occupy",
      "meaning": "（空間・時間）を占める；を占領する",
      "section": 9
    },
    {
      "no": 810,
      "word": "pop",
      "meaning": "ひょいと動く；不意に現れる；ポンとはじける",
      "section": 9
    },
    {
      "no": 811,
      "word": "pile",
      "meaning": "を積み重ねる；積み重なる",
      "section": 9
    },
    {
      "no": 812,
      "word": "greet",
      "meaning": "に挨拶する；を迎える",
      "section": 9
    },
    {
      "no": 813,
      "word": "apologize",
      "meaning": "（～に；～のことで）謝る（to；for）；弁明する",
      "section": 9
    },
    {
      "no": 814,
      "word": "frustrate",
      "meaning": "をいら立たせる；（計画・希望など）を挫折させる",
      "section": 9
    },
    {
      "no": 815,
      "word": "relieve",
      "meaning": "を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する",
      "section": 9
    },
    {
      "no": 816,
      "word": "derive",
      "meaning": "由来する；を引き出す；を推論する",
      "section": 9
    },
    {
      "no": 817,
      "word": "deserve",
      "meaning": "に値する",
      "section": 9
    },
    {
      "no": 818,
      "word": "peer",
      "meaning": "（～を）じっと見る（at / into）",
      "section": 9
    },
    {
      "no": 819,
      "word": "defeat",
      "meaning": "を負かす（≒ beat）；を失敗させる",
      "section": 9
    },
    {
      "no": 820,
      "word": "convert",
      "meaning": "を変える；を改宗［転向］させる；を交換する",
      "section": 9
    },
    {
      "no": 821,
      "word": "wed",
      "meaning": "と結婚する；を（～と）結婚させる（to）",
      "section": 9
    },
    {
      "no": 822,
      "word": "delight",
      "meaning": "を喜ばせる；（～を）大いに喜ぶ（in）",
      "section": 9
    },
    {
      "no": 823,
      "word": "boost",
      "meaning": "を押し上げる；を増加させる",
      "section": 9
    },
    {
      "no": 824,
      "word": "endure",
      "meaning": "に耐える（≒ put up with）；（に）持ちこたえる",
      "section": 9
    },
    {
      "no": 825,
      "word": "correspond",
      "meaning": "一致する；（～に）相当する（to）；文通する",
      "section": 9
    },
    {
      "no": 826,
      "word": "impose",
      "meaning": "を課す；を押しつける",
      "section": 9
    },
    {
      "no": 827,
      "word": "rescue",
      "meaning": "を救う",
      "section": 9
    },
    {
      "no": 828,
      "word": "resolve",
      "meaning": "を解決する；を決意する；を議決する",
      "section": 9
    },
    {
      "no": 829,
      "word": "register",
      "meaning": "を記録する，登録する；（～に）登録する（for）",
      "section": 9
    },
    {
      "no": 830,
      "word": "interrupt",
      "meaning": "を中断させる；（の）邪魔をする",
      "section": 9
    },
    {
      "no": 831,
      "word": "rid",
      "meaning": "から（～を）取り除く，除去する（of）",
      "section": 9
    },
    {
      "no": 832,
      "word": "prohibit",
      "meaning": "を禁止する",
      "section": 9
    },
    {
      "no": 833,
      "word": "compose",
      "meaning": "を構成する；を創作する；を鎮静する",
      "section": 9
    },
    {
      "no": 834,
      "word": "misunderstand",
      "meaning": "（を）誤解する",
      "section": 9
    },
    {
      "no": 835,
      "word": "punish",
      "meaning": "を罰する；に損傷を与える",
      "section": 9
    },
    {
      "no": 836,
      "word": "ruin",
      "meaning": "をだめにする；を破滅させる；破滅する",
      "section": 9
    },
    {
      "no": 837,
      "word": "defend",
      "meaning": "を防御する；を弁護する",
      "section": 9
    },
    {
      "no": 838,
      "word": "embrace",
      "meaning": "を受け入れる；（を）抱擁する；を包含する",
      "section": 9
    },
    {
      "no": 839,
      "word": "modify",
      "meaning": "を修正する；を緩和する",
      "section": 9
    },
    {
      "no": 840,
      "word": "qualify",
      "meaning": "（人）に資格を与える；資格がある",
      "section": 9
    },
    {
      "no": 841,
      "word": "passion",
      "meaning": "情熱；熱中；激怒",
      "section": 9
    },
    {
      "no": 842,
      "word": "enthusiasm",
      "meaning": "（～への）熱情，熱意（for）",
      "section": 9
    },
    {
      "no": 843,
      "word": "phase",
      "meaning": "段階，局面；側面",
      "section": 9
    },
    {
      "no": 844,
      "word": "mode",
      "meaning": "方式；気分；形態；流行",
      "section": 9
    },
    {
      "no": 845,
      "word": "span",
      "meaning": "期間；範囲",
      "section": 9
    },
    {
      "no": 846,
      "word": "gravity",
      "meaning": "重力，引力；重量；重大さ",
      "section": 9
    },
    {
      "no": 847,
      "word": "orbit",
      "meaning": "軌道；（活動・勢力などの）範囲",
      "section": 9
    },
    {
      "no": 848,
      "word": "asteroid",
      "meaning": "小惑星（≒ minor planet）；ヒトデ（＝ starfish）",
      "section": 9
    },
    {
      "no": 849,
      "word": "core",
      "meaning": "核心；芯",
      "section": 9
    },
    {
      "no": 850,
      "word": "soul",
      "meaning": "精神；魂，霊魂；生気",
      "section": 9
    },
    {
      "no": 851,
      "word": "nerve",
      "meaning": "神経；〔～s〕神経過敏；（...する）度胸（to do）",
      "section": 9
    },
    {
      "no": 852,
      "word": "infection",
      "meaning": "感染（症）",
      "section": 9
    },
    {
      "no": 853,
      "word": "mall",
      "meaning": "【主に米】 モール，ショッピングセンター",
      "section": 9
    },
    {
      "no": 854,
      "word": "grocery",
      "meaning": "〔～ies〕食料雑貨；食料雑貨店",
      "section": 9
    },
    {
      "no": 855,
      "word": "humor",
      "meaning": "ユーモア；気分，機嫌；気質",
      "section": 9
    },
    {
      "no": 856,
      "word": "instinct",
      "meaning": "本能；勘，直感；（自然に起こる）衝動",
      "section": 9
    },
    {
      "no": 857,
      "word": "faith",
      "meaning": "（～への）信頼（in）；信仰（心）",
      "section": 9
    },
    {
      "no": 858,
      "word": "courage",
      "meaning": "勇気",
      "section": 9
    },
    {
      "no": 859,
      "word": "incentive",
      "meaning": "動機（づけ）；報奨金",
      "section": 9
    },
    {
      "no": 860,
      "word": "prospect",
      "meaning": "見込み；〔～s〕（未来への）展望；有望な人",
      "section": 9
    },
    {
      "no": 861,
      "word": "obstacle",
      "meaning": "（～に対する）障害（物）（to）",
      "section": 9
    },
    {
      "no": 862,
      "word": "architecture",
      "meaning": "建築；建築様式；構造",
      "section": 9
    },
    {
      "no": 863,
      "word": "stem",
      "meaning": "（草木の）茎，幹",
      "section": 9
    },
    {
      "no": 864,
      "word": "illusion",
      "meaning": "錯覚，思い違い；幻想",
      "section": 9
    },
    {
      "no": 865,
      "word": "discrimination",
      "meaning": "（～に対する）差別（against）；区別",
      "section": 9
    },
    {
      "no": 866,
      "word": "shame",
      "meaning": "恥；残念なこと",
      "section": 9
    },
    {
      "no": 867,
      "word": "drought",
      "meaning": "干ばつ；（慢性的な）不足",
      "section": 9
    },
    {
      "no": 868,
      "word": "flavor",
      "meaning": "風味；特色",
      "section": 9
    },
    {
      "no": 869,
      "word": "portion",
      "meaning": "部分；1人前；割り当て",
      "section": 9
    },
    {
      "no": 870,
      "word": "recipe",
      "meaning": "調理法，レシピ；手順；秘訣",
      "section": 9
    },
    {
      "no": 871,
      "word": "luxury",
      "meaning": "ぜいたく（品）；〔形容詞的に〕豪華な",
      "section": 9
    },
    {
      "no": 872,
      "word": "chip",
      "meaning": "小片，破片；欠けた箇所；集積回路",
      "section": 9
    },
    {
      "no": 873,
      "word": "ritual",
      "meaning": "儀式；（日常の）習慣的行為",
      "section": 9
    },
    {
      "no": 874,
      "word": "sake",
      "meaning": "〔for the ～ ofで〕のために，の目的で；に免じて",
      "section": 9
    },
    {
      "no": 875,
      "word": "prefecture",
      "meaning": "（日本の）県，府；（フランスなどの）県",
      "section": 9
    },
    {
      "no": 876,
      "word": "council",
      "meaning": "（地方）議会；評議会；（公の）会議",
      "section": 9
    },
    {
      "no": 877,
      "word": "administration",
      "meaning": "管理（部）；行政；政府（機関）",
      "section": 9
    },
    {
      "no": 878,
      "word": "curriculum",
      "meaning": "教育課程，カリキュラム",
      "section": 9
    },
    {
      "no": 879,
      "word": "precious",
      "meaning": "貴重な；高価な（≒ valuable）",
      "section": 9
    },
    {
      "no": 880,
      "word": "generous",
      "meaning": "寛大な；気前のよい（⇔ stingy けちな）；豊富な",
      "section": 9
    },
    {
      "no": 881,
      "word": "casual",
      "meaning": "何気ない；形式ばらない",
      "section": 9
    },
    {
      "no": 882,
      "word": "optimistic",
      "meaning": "楽観的な（⇔ pessimistic ⇒ 1593）",
      "section": 9
    },
    {
      "no": 883,
      "word": "rough",
      "meaning": "粗い；大まかな；乱暴な",
      "section": 9
    },
    {
      "no": 884,
      "word": "unpleasant",
      "meaning": "不愉快な；不親切な，無礼な",
      "section": 9
    },
    {
      "no": 885,
      "word": "Arctic",
      "meaning": "北極の（⇔ Antarctic 南極の）",
      "section": 9
    },
    {
      "no": 886,
      "word": "ultimate",
      "meaning": "究極の",
      "section": 9
    },
    {
      "no": 887,
      "word": "deaf",
      "meaning": "耳が聞こえない（≒ hard of hearing）",
      "section": 9
    },
    {
      "no": 888,
      "word": "genuine",
      "meaning": "本物の（≒ authentic ⇒ 1580, real）；偽りのない",
      "section": 9
    },
    {
      "no": 889,
      "word": "manual",
      "meaning": "体［手］を使う；手の；手動式の",
      "section": 9
    },
    {
      "no": 890,
      "word": "mechanical",
      "meaning": "機械の；機械的な",
      "section": 9
    },
    {
      "no": 891,
      "word": "instant",
      "meaning": "即時の，すぐの；即席の",
      "section": 9
    },
    {
      "no": 892,
      "word": "spare",
      "meaning": "余分の，予備の",
      "section": 9
    },
    {
      "no": 893,
      "word": "immune",
      "meaning": "（～に対して）免疫を持つ（to）；（～を）免れた（from）",
      "section": 9
    },
    {
      "no": 894,
      "word": "harsh",
      "meaning": "厳しい；（光・色・味などが）不快な",
      "section": 9
    },
    {
      "no": 895,
      "word": "collective",
      "meaning": "集団の，共同の",
      "section": 9
    },
    {
      "no": 896,
      "word": "inevitable",
      "meaning": "避けられない",
      "section": 9
    },
    {
      "no": 897,
      "word": "profound",
      "meaning": "重大な；深い；難解な",
      "section": 9
    },
    {
      "no": 898,
      "word": "steady",
      "meaning": "着実な，一定の；安定した",
      "section": 9
    },
    {
      "no": 899,
      "word": "mature",
      "meaning": "成熟した（⇔ immature 未熟な）；熟した",
      "section": 9
    },
    {
      "no": 900,
      "word": "likewise",
      "meaning": "同様に（≒ in the same way）",
      "section": 9
    },
    {
      "no": 901,
      "word": "chase",
      "meaning": "（を）追跡する；（を）追求する",
      "section": 10
    },
    {
      "no": 902,
      "word": "sue",
      "meaning": "を告訴する；（～を求めて）訴訟を起こす（for）",
      "section": 10
    },
    {
      "no": 903,
      "word": "gaze",
      "meaning": "じっと見る",
      "section": 10
    },
    {
      "no": 904,
      "word": "slip",
      "meaning": "滑る；滑り落ちる；そっと動く",
      "section": 10
    },
    {
      "no": 905,
      "word": "load",
      "meaning": "に積む；に負わせる",
      "section": 10
    },
    {
      "no": 906,
      "word": "overwhelm",
      "meaning": "を圧倒する；を（精神的に）打ちのめす",
      "section": 10
    },
    {
      "no": 907,
      "word": "wander",
      "meaning": "歩き回る；それる；はぐれる",
      "section": 10
    },
    {
      "no": 908,
      "word": "float",
      "meaning": "漂う，浮かぶ；を浮かべる",
      "section": 10
    },
    {
      "no": 909,
      "word": "pour",
      "meaning": "を注ぐ；激しく降る；押し寄せる",
      "section": 10
    },
    {
      "no": 910,
      "word": "substitute",
      "meaning": "を代わりに使う；（～の）代理をする（for）",
      "section": 10
    },
    {
      "no": 911,
      "word": "pronounce",
      "meaning": "を発音する；を宣言する",
      "section": 10
    },
    {
      "no": 912,
      "word": "shrink",
      "meaning": "縮む，縮小する；減少する；ひるむ",
      "section": 10
    },
    {
      "no": 913,
      "word": "restore",
      "meaning": "を回復させる；を修復する",
      "section": 10
    },
    {
      "no": 914,
      "word": "trigger",
      "meaning": "を引き起こす；のきっかけとなる",
      "section": 10
    },
    {
      "no": 915,
      "word": "grab",
      "meaning": "をつかむ；を横取りする；を急いで食べる",
      "section": 10
    },
    {
      "no": 916,
      "word": "retain",
      "meaning": "を保持する；を覚えている",
      "section": 10
    },
    {
      "no": 917,
      "word": "reproduce",
      "meaning": "を複製する；を繁殖させる；繁殖する",
      "section": 10
    },
    {
      "no": 918,
      "word": "bob",
      "meaning": "上下に動く；急に動く；を上下に動かす",
      "section": 10
    },
    {
      "no": 919,
      "word": "entertain",
      "meaning": "を楽しませる；をもてなす",
      "section": 10
    },
    {
      "no": 920,
      "word": "interfere",
      "meaning": "干渉する，介入する；邪魔する",
      "section": 10
    },
    {
      "no": 921,
      "word": "cultivate",
      "meaning": "を養う；を耕す；を栽培する",
      "section": 10
    },
    {
      "no": 922,
      "word": "underlie",
      "meaning": "の根底にある",
      "section": 10
    },
    {
      "no": 923,
      "word": "anticipate",
      "meaning": "を予期する；楽しみに待つ",
      "section": 10
    },
    {
      "no": 924,
      "word": "justify",
      "meaning": "を正当化する",
      "section": 10
    },
    {
      "no": 925,
      "word": "regulate",
      "meaning": "を規制する；を調整する",
      "section": 10
    },
    {
      "no": 926,
      "word": "scan",
      "meaning": "を走査［スキャン］する；をざっと見る；を注意深く調べる",
      "section": 10
    },
    {
      "no": 927,
      "word": "classify",
      "meaning": "を分類する；を機密扱いにする",
      "section": 10
    },
    {
      "no": 928,
      "word": "submit",
      "meaning": "を提出する；〔submit oneselfで〕（～に）従う（to）",
      "section": 10
    },
    {
      "no": 929,
      "word": "pause",
      "meaning": "（一時的に）中止する；（一瞬）立ち止まる",
      "section": 10
    },
    {
      "no": 930,
      "word": "lean",
      "meaning": "傾く；寄りかかる；をもたせかける",
      "section": 10
    },
    {
      "no": 931,
      "word": "bump",
      "meaning": "ぶつかる；をぶつける",
      "section": 10
    },
    {
      "no": 932,
      "word": "fold",
      "meaning": "を折り畳む；（両腕）を組む；（折り）畳める",
      "section": 10
    },
    {
      "no": 933,
      "word": "hesitate",
      "meaning": "躊躇する，ためらう",
      "section": 10
    },
    {
      "no": 934,
      "word": "pump",
      "meaning": "（液体・気体）をポンプで送り込む；をくみ出す；を注ぎ込む",
      "section": 10
    },
    {
      "no": 935,
      "word": "mount",
      "meaning": "を据えつける；に着手する；（自転車など）に乗る；増える",
      "section": 10
    },
    {
      "no": 936,
      "word": "exceed",
      "meaning": "を超える；に勝る",
      "section": 10
    },
    {
      "no": 937,
      "word": "undergo",
      "meaning": "を経験する；（手術など）を受ける；に耐える",
      "section": 10
    },
    {
      "no": 938,
      "word": "confront",
      "meaning": "に立ち向かう；（困難などが）に立ちはだかる",
      "section": 10
    },
    {
      "no": 939,
      "word": "consult",
      "meaning": "（に）相談する；を参照する",
      "section": 10
    },
    {
      "no": 940,
      "word": "fulfill",
      "meaning": "を実現させる；を果たす；を満たす",
      "section": 10
    },
    {
      "no": 941,
      "word": "privilege",
      "meaning": "特権，特典",
      "section": 10
    },
    {
      "no": 942,
      "word": "formation",
      "meaning": "形成；構成（物）；隊列",
      "section": 10
    },
    {
      "no": 943,
      "word": "dimension",
      "meaning": "側面，局面；次元；寸法",
      "section": 10
    },
    {
      "no": 944,
      "word": "neuron",
      "meaning": "ニューロン，神経単位",
      "section": 10
    },
    {
      "no": 945,
      "word": "sensation",
      "meaning": "感覚；大評判",
      "section": 10
    },
    {
      "no": 946,
      "word": "chart",
      "meaning": "図，グラフ；海図；ヒットチャート",
      "section": 10
    },
    {
      "no": 947,
      "word": "geography",
      "meaning": "〔the ～〕地理；地理学",
      "section": 10
    },
    {
      "no": 948,
      "word": "panel",
      "meaning": "（専門家の）一団；討論者一同；羽目板",
      "section": 10
    },
    {
      "no": 949,
      "word": "semester",
      "meaning": "【主に米】 （2学期制の）学期",
      "section": 10
    },
    {
      "no": 950,
      "word": "workforce",
      "meaning": "労働人口，総労働力；全従業員（数）",
      "section": 10
    },
    {
      "no": 951,
      "word": "mill",
      "meaning": "製造工場；製粉所；粉ひき機",
      "section": 10
    },
    {
      "no": 952,
      "word": "abuse",
      "meaning": "乱用；虐待",
      "section": 10
    },
    {
      "no": 953,
      "word": "vice",
      "meaning": "（道徳上の）悪（⇔ virtue ⇒ 1078）；欠点",
      "section": 10
    },
    {
      "no": 954,
      "word": "fate",
      "meaning": "運命；結末；最期",
      "section": 10
    },
    {
      "no": 955,
      "word": "tragedy",
      "meaning": "悲劇（的な事態）（⇔ comedy 喜劇）",
      "section": 10
    },
    {
      "no": 956,
      "word": "scenario",
      "meaning": "（予想される）筋書き，事態；脚本",
      "section": 10
    },
    {
      "no": 957,
      "word": "allergy",
      "meaning": "アレルギー",
      "section": 10
    },
    {
      "no": 958,
      "word": "wound",
      "meaning": "（銃弾・刃物などによる）傷；痛手",
      "section": 10
    },
    {
      "no": 959,
      "word": "antibiotic",
      "meaning": "〔通例～s〕抗生物質",
      "section": 10
    },
    {
      "no": 960,
      "word": "vaccine",
      "meaning": "ワクチン",
      "section": 10
    },
    {
      "no": 961,
      "word": "metaphor",
      "meaning": "隠喩；比喩",
      "section": 10
    },
    {
      "no": 962,
      "word": "folk",
      "meaning": "人々；〔～s〕皆さん；〔one",
      "section": 10
    },
    {
      "no": 963,
      "word": "fare",
      "meaning": "（乗り物の）料金",
      "section": 10
    },
    {
      "no": 964,
      "word": "transition",
      "meaning": "移り変わり；過渡期",
      "section": 10
    },
    {
      "no": 965,
      "word": "maximum",
      "meaning": "最大限（⇔ minimum ⇒ 653）",
      "section": 10
    },
    {
      "no": 966,
      "word": "galaxy",
      "meaning": "星雲，銀河；〔the G～〕銀河系",
      "section": 10
    },
    {
      "no": 967,
      "word": "mineral",
      "meaning": "鉱物；ミネラル",
      "section": 10
    },
    {
      "no": 968,
      "word": "skeleton",
      "meaning": "骨格；骨組み；概略",
      "section": 10
    },
    {
      "no": 969,
      "word": "counterpart",
      "meaning": "相当する物［人］",
      "section": 10
    },
    {
      "no": 970,
      "word": "stroke",
      "meaning": "脳卒中；（ボールを）打つこと；（雷などの）一撃",
      "section": 10
    },
    {
      "no": 971,
      "word": "pedestrian",
      "meaning": "歩行者",
      "section": 10
    },
    {
      "no": 972,
      "word": "trail",
      "meaning": "（野山などの）小道；跡；手がかり",
      "section": 10
    },
    {
      "no": 973,
      "word": "ecology",
      "meaning": "生態学；生態系；環境保護",
      "section": 10
    },
    {
      "no": 974,
      "word": "sibling",
      "meaning": "きょうだい（の1人）",
      "section": 10
    },
    {
      "no": 975,
      "word": "ratio",
      "meaning": "比率",
      "section": 10
    },
    {
      "no": 976,
      "word": "mixture",
      "meaning": "混合（物）",
      "section": 10
    },
    {
      "no": 977,
      "word": "charm",
      "meaning": "魅力；お守り",
      "section": 10
    },
    {
      "no": 978,
      "word": "ambition",
      "meaning": "（～に対する）願望，野望（for）；野心",
      "section": 10
    },
    {
      "no": 979,
      "word": "prominent",
      "meaning": "卓越した；目立つ",
      "section": 10
    },
    {
      "no": 980,
      "word": "radical",
      "meaning": "急進的な；根本的な",
      "section": 10
    },
    {
      "no": 981,
      "word": "prompt",
      "meaning": "即座の，迅速な",
      "section": 10
    },
    {
      "no": 982,
      "word": "informal",
      "meaning": "形式ばらない，略式の（⇔ formal 正式の）；（言葉が）くだけた",
      "section": 10
    },
    {
      "no": 983,
      "word": "mutual",
      "meaning": "相互の；共通の",
      "section": 10
    },
    {
      "no": 984,
      "word": "neutral",
      "meaning": "中立の；（特徴・表情などが）はっきりしない",
      "section": 10
    },
    {
      "no": 985,
      "word": "alert",
      "meaning": "警戒して；敏速な",
      "section": 10
    },
    {
      "no": 986,
      "word": "magnetic",
      "meaning": "磁気の；磁石の；人を引きつける",
      "section": 10
    },
    {
      "no": 987,
      "word": "polar",
      "meaning": "極地の；電極の",
      "section": 10
    },
    {
      "no": 988,
      "word": "fluent",
      "meaning": "流ちょうな",
      "section": 10
    },
    {
      "no": 989,
      "word": "external",
      "meaning": "外部の（⇔ internal ⇒ 680）；対外的な",
      "section": 10
    },
    {
      "no": 990,
      "word": "passive",
      "meaning": "受動的な；消極的な",
      "section": 10
    },
    {
      "no": 991,
      "word": "awful",
      "meaning": "ひどい；嫌な；ものすごい",
      "section": 10
    },
    {
      "no": 992,
      "word": "unrelated",
      "meaning": "無関係の；血縁関係がない",
      "section": 10
    },
    {
      "no": 993,
      "word": "cruel",
      "meaning": "残酷な；むごい",
      "section": 10
    },
    {
      "no": 994,
      "word": "fake",
      "meaning": "偽の；見せかけだけの",
      "section": 10
    },
    {
      "no": 995,
      "word": "vulnerable",
      "meaning": "（攻撃などに）弱い，もろい；傷つきやすい",
      "section": 10
    },
    {
      "no": 996,
      "word": "urgent",
      "meaning": "緊急の",
      "section": 10
    },
    {
      "no": 997,
      "word": "spiritual",
      "meaning": "精神の（⇔ material ⇒ 73）；霊的な",
      "section": 10
    },
    {
      "no": 998,
      "word": "modest",
      "meaning": "謙虚な（≒ humble）；適度な；質素な",
      "section": 10
    },
    {
      "no": 999,
      "word": "keen",
      "meaning": "熱心な；鋭敏な；（感情・関心などが）強い",
      "section": 10
    },
    {
      "no": 1000,
      "word": "nonetheless",
      "meaning": "それにもかかわらず，それでもなお（≒ nevertheless）",
      "section": 10
    },
    {
      "no": 1001,
      "word": "negotiate",
      "meaning": "交渉する；を（交渉して）取り決める",
      "section": 11
    },
    {
      "no": 1002,
      "word": "grasp",
      "meaning": "を把握［理解］する；をしっかり握る",
      "section": 11
    },
    {
      "no": 1003,
      "word": "donate",
      "meaning": "を寄付する；（臓器・血液）を提供する",
      "section": 11
    },
    {
      "no": 1004,
      "word": "arrest",
      "meaning": "を逮捕する；を止める；（注意）を引く",
      "section": 11
    },
    {
      "no": 1005,
      "word": "crack",
      "meaning": "ひびが入る；にひびを入れる",
      "section": 11
    },
    {
      "no": 1006,
      "word": "tap",
      "meaning": "を軽くたたく；（液体）を出す；を盗聴する",
      "section": 11
    },
    {
      "no": 1007,
      "word": "split",
      "meaning": "を分割する；を分担する；分裂する",
      "section": 11
    },
    {
      "no": 1008,
      "word": "forecast",
      "meaning": "を予想［予測］する",
      "section": 11
    },
    {
      "no": 1009,
      "word": "exclude",
      "meaning": "を除外する（⇔include を含む）",
      "section": 11
    },
    {
      "no": 1010,
      "word": "overlook",
      "meaning": "を見落とす；を大目に見る；を見渡す",
      "section": 11
    },
    {
      "no": 1011,
      "word": "burst",
      "meaning": "破裂する；（～を）突然始める（into）",
      "section": 11
    },
    {
      "no": 1012,
      "word": "heal",
      "meaning": "（人・傷など）を治す；治る",
      "section": 11
    },
    {
      "no": 1013,
      "word": "forbid",
      "meaning": "を禁じる（⇔permit 許可する）",
      "section": 11
    },
    {
      "no": 1014,
      "word": "install",
      "meaning": "をインストールする；を設置する；を就任させる",
      "section": 11
    },
    {
      "no": 1015,
      "word": "diminish",
      "meaning": "を減らす；減少する（≒decrease）",
      "section": 11
    },
    {
      "no": 1016,
      "word": "cite",
      "meaning": "を引き合いに出す；を引用する",
      "section": 11
    },
    {
      "no": 1017,
      "word": "quote",
      "meaning": "を引用する；を引き合いに出す",
      "section": 11
    },
    {
      "no": 1018,
      "word": "dispute",
      "meaning": "に異議を唱える；（を）議論する",
      "section": 11
    },
    {
      "no": 1019,
      "word": "highlight",
      "meaning": "を目立たせる、強調する",
      "section": 11
    },
    {
      "no": 1020,
      "word": "distract",
      "meaning": "（注意など）をそらす",
      "section": 11
    },
    {
      "no": 1021,
      "word": "cheat",
      "meaning": "をだます；不正をする",
      "section": 11
    },
    {
      "no": 1022,
      "word": "foster",
      "meaning": "をはぐくむ；を養育する；を心に抱く",
      "section": 11
    },
    {
      "no": 1023,
      "word": "obey",
      "meaning": "に従う；に服従する",
      "section": 11
    },
    {
      "no": 1024,
      "word": "bend",
      "meaning": "を曲げる；を屈服させる；曲がる",
      "section": 11
    },
    {
      "no": 1025,
      "word": "deprive",
      "meaning": "から（権利などを）奪う",
      "section": 11
    },
    {
      "no": 1026,
      "word": "govern",
      "meaning": "（を）統治する、支配する",
      "section": 11
    },
    {
      "no": 1027,
      "word": "log",
      "meaning": "〔log onで〕ログオンする；を記録する",
      "section": 11
    },
    {
      "no": 1028,
      "word": "transmit",
      "meaning": "を伝える；（電波・信号など）を送る",
      "section": 11
    },
    {
      "no": 1029,
      "word": "bully",
      "meaning": "をいじめる；を脅す",
      "section": 11
    },
    {
      "no": 1030,
      "word": "leap",
      "meaning": "跳ぶ；さっと動く；急上昇する",
      "section": 11
    },
    {
      "no": 1031,
      "word": "astonish",
      "meaning": "を驚かす",
      "section": 11
    },
    {
      "no": 1032,
      "word": "thrill",
      "meaning": "をぞくぞくさせる；わくわくする",
      "section": 11
    },
    {
      "no": 1033,
      "word": "nod",
      "meaning": "うなずく；会釈する；うとうとする",
      "section": 11
    },
    {
      "no": 1034,
      "word": "bow",
      "meaning": "おじぎする；屈服する",
      "section": 11
    },
    {
      "no": 1035,
      "word": "blend",
      "meaning": "を混ぜる；を調和させる；（～に）溶け込む（into）",
      "section": 11
    },
    {
      "no": 1036,
      "word": "complicate",
      "meaning": "を複雑にする",
      "section": 11
    },
    {
      "no": 1037,
      "word": "pitch",
      "meaning": "を投げる；倒れる；縦揺れする",
      "section": 11
    },
    {
      "no": 1038,
      "word": "persist",
      "meaning": "続く；固執する",
      "section": 11
    },
    {
      "no": 1039,
      "word": "dedicate",
      "meaning": "をささげる；を献呈する",
      "section": 11
    },
    {
      "no": 1040,
      "word": "equip",
      "meaning": "に備えつける",
      "section": 11
    },
    {
      "no": 1041,
      "word": "premise",
      "meaning": "前提；〔～s〕（建物を含めた）構内、敷地",
      "section": 11
    },
    {
      "no": 1042,
      "word": "input",
      "meaning": "入力（情報）、投入；（情報・時間などの）提供",
      "section": 11
    },
    {
      "no": 1043,
      "word": "merit",
      "meaning": "利点（⇔demerit 欠点）；功績；真価",
      "section": 11
    },
    {
      "no": 1044,
      "word": "sympathy",
      "meaning": "同情；（～に対する）共感（with/for）",
      "section": 11
    },
    {
      "no": 1045,
      "word": "compliment",
      "meaning": "賛辞；表敬",
      "section": 11
    },
    {
      "no": 1046,
      "word": "infrastructure",
      "meaning": "インフラ、基本的施設；（経済）基盤",
      "section": 11
    },
    {
      "no": 1047,
      "word": "ray",
      "meaning": "光線；ひらめき、一筋の光明",
      "section": 11
    },
    {
      "no": 1048,
      "word": "distress",
      "meaning": "苦悩；苦痛；困窮",
      "section": 11
    },
    {
      "no": 1049,
      "word": "joint",
      "meaning": "関節；接合（部）",
      "section": 11
    },
    {
      "no": 1050,
      "word": "expedition",
      "meaning": "遠征（隊）、探検（隊）",
      "section": 11
    },
    {
      "no": 1051,
      "word": "adolescent",
      "meaning": "青年；青年期の",
      "section": 11
    },
    {
      "no": 1052,
      "word": "shade",
      "meaning": "（日）陰；色合い；日よけ；微妙な相違",
      "section": 11
    },
    {
      "no": 1053,
      "word": "jury",
      "meaning": "陪審（員団）；審査員団",
      "section": 11
    },
    {
      "no": 1054,
      "word": "ethic",
      "meaning": "倫理、道徳；〔～s〕倫理［道徳］規範",
      "section": 11
    },
    {
      "no": 1055,
      "word": "penalty",
      "meaning": "（刑）罰；罰金；ペナルティー",
      "section": 11
    },
    {
      "no": 1056,
      "word": "faculty",
      "meaning": "能力、機能；学部；教授陣",
      "section": 11
    },
    {
      "no": 1057,
      "word": "scheme",
      "meaning": "計画（≒plan）；体系；陰謀",
      "section": 11
    },
    {
      "no": 1058,
      "word": "nutrition",
      "meaning": "栄養（の摂取）",
      "section": 11
    },
    {
      "no": 1059,
      "word": "particle",
      "meaning": "（微）粒子；ほんのわずか",
      "section": 11
    },
    {
      "no": 1060,
      "word": "molecule",
      "meaning": "分子；微粒子",
      "section": 11
    },
    {
      "no": 1061,
      "word": "nationality",
      "meaning": "国籍；国民；国民性",
      "section": 11
    },
    {
      "no": 1062,
      "word": "poll",
      "meaning": "世論調査；投票（数）",
      "section": 11
    },
    {
      "no": 1063,
      "word": "clinic",
      "meaning": "診療所、クリニック；（病院内の）～科",
      "section": 11
    },
    {
      "no": 1064,
      "word": "dementia",
      "meaning": "認知症",
      "section": 11
    },
    {
      "no": 1065,
      "word": "fatigue",
      "meaning": "疲労（≒exhaustion）",
      "section": 11
    },
    {
      "no": 1066,
      "word": "dilemma",
      "meaning": "ジレンマ、板ばさみ",
      "section": 11
    },
    {
      "no": 1067,
      "word": "queue",
      "meaning": "【英】（順番を待つ）列",
      "section": 11
    },
    {
      "no": 1068,
      "word": "curve",
      "meaning": "（道路などの）カーブ；曲線",
      "section": 11
    },
    {
      "no": 1069,
      "word": "narrative",
      "meaning": "物語、話；（小説の）叙述部分、地の文",
      "section": 11
    },
    {
      "no": 1070,
      "word": "fingerprint",
      "meaning": "指紋",
      "section": 11
    },
    {
      "no": 1071,
      "word": "file",
      "meaning": "ファイル；（書類の）とじ込み",
      "section": 11
    },
    {
      "no": 1072,
      "word": "wilderness",
      "meaning": "荒野；（庭・町などの）放置された部分",
      "section": 11
    },
    {
      "no": 1073,
      "word": "pesticide",
      "meaning": "殺虫剤；除草剤（≒herbicide）",
      "section": 11
    },
    {
      "no": 1074,
      "word": "panic",
      "meaning": "パニック（状態）；狼狽",
      "section": 11
    },
    {
      "no": 1075,
      "word": "fabric",
      "meaning": "織物、布（地）；構造",
      "section": 11
    },
    {
      "no": 1076,
      "word": "fantasy",
      "meaning": "空想；幻想；幻想的作品",
      "section": 11
    },
    {
      "no": 1077,
      "word": "fancy",
      "meaning": "（気まぐれな）好み；空想；思いつき",
      "section": 11
    },
    {
      "no": 1078,
      "word": "virtue",
      "meaning": "美徳（⇔vice 悪）；長所；効能",
      "section": 11
    },
    {
      "no": 1079,
      "word": "grateful",
      "meaning": "感謝している",
      "section": 11
    },
    {
      "no": 1080,
      "word": "valid",
      "meaning": "妥当な；有効な",
      "section": 11
    },
    {
      "no": 1081,
      "word": "elaborate",
      "meaning": "入念な；凝った",
      "section": 11
    },
    {
      "no": 1082,
      "word": "moderate",
      "meaning": "適度な；穏健な",
      "section": 11
    },
    {
      "no": 1083,
      "word": "dynamic",
      "meaning": "活動的な、精力的な；動的な（⇔static 静的な）",
      "section": 11
    },
    {
      "no": 1084,
      "word": "brave",
      "meaning": "勇敢な（⇔cowardly 臆病な）；見事な",
      "section": 11
    },
    {
      "no": 1085,
      "word": "brilliant",
      "meaning": "すばらしい；才能にあふれた；きらめく",
      "section": 11
    },
    {
      "no": 1086,
      "word": "tremendous",
      "meaning": "途方もない、莫大な；すばらしい",
      "section": 11
    },
    {
      "no": 1087,
      "word": "oral",
      "meaning": "口頭の",
      "section": 11
    },
    {
      "no": 1088,
      "word": "innocent",
      "meaning": "無罪の（⇔guilty 有罪の）；無邪気な；無知の",
      "section": 11
    },
    {
      "no": 1089,
      "word": "subsequent",
      "meaning": "その後の",
      "section": 11
    },
    {
      "no": 1090,
      "word": "shallow",
      "meaning": "浅い（⇔deep 深い）；浅薄な",
      "section": 11
    },
    {
      "no": 1091,
      "word": "indifferent",
      "meaning": "無関心な（≒uninterested）",
      "section": 11
    },
    {
      "no": 1092,
      "word": "inferior",
      "meaning": "より劣った（⇔superior よりすぐれた）",
      "section": 11
    },
    {
      "no": 1093,
      "word": "awkward",
      "meaning": "気まずい；ぎこちない；厄介な",
      "section": 11
    },
    {
      "no": 1094,
      "word": "obese",
      "meaning": "肥満した",
      "section": 11
    },
    {
      "no": 1095,
      "word": "pregnant",
      "meaning": "妊娠した；（～で）満ちている（with）",
      "section": 11
    },
    {
      "no": 1096,
      "word": "intimate",
      "meaning": "親密な；密接な",
      "section": 11
    },
    {
      "no": 1097,
      "word": "medieval",
      "meaning": "中世の；時代遅れの",
      "section": 11
    },
    {
      "no": 1098,
      "word": "sacred",
      "meaning": "神聖な（≒holy）；宗教的な；厳粛な",
      "section": 11
    },
    {
      "no": 1099,
      "word": "simultaneously",
      "meaning": "（～と）同時に（with）；一斉に",
      "section": 11
    },
    {
      "no": 1100,
      "word": "versus",
      "meaning": "〔A ～ Bで〕A対B；AかBか",
      "section": 11
    },
    {
      "no": 1101,
      "word": "proceed",
      "meaning": "進む，進行する；（～を）続行する（with）",
      "section": 12
    },
    {
      "no": 1102,
      "word": "orient",
      "meaning": "（人）を（環境などに）慣らす（to）；〔受身形で〕（関心などが）（～に）向いている（to / toward）",
      "section": 12
    },
    {
      "no": 1103,
      "word": "surf",
      "meaning": "（インターネット上の情報など）を見て回る；サーフィンをする",
      "section": 12
    },
    {
      "no": 1104,
      "word": "filter",
      "meaning": "をろ過する；を取り除く",
      "section": 12
    },
    {
      "no": 1105,
      "word": "bind",
      "meaning": "を縛る；を束縛する；を結び付ける",
      "section": 12
    },
    {
      "no": 1106,
      "word": "resort",
      "meaning": "（好ましくない手段に）訴える，頼る（to）",
      "section": 12
    },
    {
      "no": 1107,
      "word": "reinforce",
      "meaning": "を強化する；を補強する",
      "section": 12
    },
    {
      "no": 1108,
      "word": "accumulate",
      "meaning": "を蓄積する，集める；積もる",
      "section": 12
    },
    {
      "no": 1109,
      "word": "bet",
      "meaning": "と確信する，断言する；（金などを）かける",
      "section": 12
    },
    {
      "no": 1110,
      "word": "advocate",
      "meaning": "を主張する；を擁護する",
      "section": 12
    },
    {
      "no": 1111,
      "word": "constitute",
      "meaning": "を構成する；になる，に等しい",
      "section": 12
    },
    {
      "no": 1112,
      "word": "undertake",
      "meaning": "を引き受ける；を保証する；に着手する",
      "section": 12
    },
    {
      "no": 1113,
      "word": "grip",
      "meaning": "を握る；をとらえる",
      "section": 12
    },
    {
      "no": 1114,
      "word": "dismiss",
      "meaning": "（意見など）を退ける；を解雇する",
      "section": 12
    },
    {
      "no": 1115,
      "word": "fade",
      "meaning": "薄れる；衰える",
      "section": 12
    },
    {
      "no": 1116,
      "word": "conceal",
      "meaning": "を隠す（≒ hide）；を秘密にする（⇔uncover ⇒ 1236）",
      "section": 12
    },
    {
      "no": 1117,
      "word": "chew",
      "meaning": "（を）かむ；をかみ砕く",
      "section": 12
    },
    {
      "no": 1118,
      "word": "swallow",
      "meaning": "（を）飲み込む；をうのみにする；に耐える",
      "section": 12
    },
    {
      "no": 1119,
      "word": "seal",
      "meaning": "を密閉する；に封をする",
      "section": 12
    },
    {
      "no": 1120,
      "word": "migrate",
      "meaning": "移住する；（鳥などが）渡る",
      "section": 12
    },
    {
      "no": 1121,
      "word": "exaggerate",
      "meaning": "（を）誇張する；を強調する",
      "section": 12
    },
    {
      "no": 1122,
      "word": "accuse",
      "meaning": "を非難する；を告訴する",
      "section": 12
    },
    {
      "no": 1123,
      "word": "vanish",
      "meaning": "消える（≒ disappear）",
      "section": 12
    },
    {
      "no": 1124,
      "word": "polish",
      "meaning": "を磨く；を洗練させる",
      "section": 12
    },
    {
      "no": 1125,
      "word": "wipe",
      "meaning": "を拭く；を拭き取る；を消し去る",
      "section": 12
    },
    {
      "no": 1126,
      "word": "sweep",
      "meaning": "（を）掃く；を一掃する；さっと通過する",
      "section": 12
    },
    {
      "no": 1127,
      "word": "mislead",
      "meaning": "を誤解させる，欺く；（人）を間違った方向に導く",
      "section": 12
    },
    {
      "no": 1128,
      "word": "spoil",
      "meaning": "を台無しにする；を甘やかす；だめになる",
      "section": 12
    },
    {
      "no": 1129,
      "word": "compound",
      "meaning": "を悪化させる；を合成する；を混合する",
      "section": 12
    },
    {
      "no": 1130,
      "word": "explode",
      "meaning": "爆発する；急増する；を論破する",
      "section": 12
    },
    {
      "no": 1131,
      "word": "disgust",
      "meaning": "をむかつかせる；に愛想を尽かせる",
      "section": 12
    },
    {
      "no": 1132,
      "word": "commute",
      "meaning": "通勤［通学］する",
      "section": 12
    },
    {
      "no": 1133,
      "word": "decorate",
      "meaning": "を装飾する",
      "section": 12
    },
    {
      "no": 1134,
      "word": "postpone",
      "meaning": "を延期する（≒ put off）",
      "section": 12
    },
    {
      "no": 1135,
      "word": "cease",
      "meaning": "をやめる；終わる",
      "section": 12
    },
    {
      "no": 1136,
      "word": "compromise",
      "meaning": "妥協する；を危うくする",
      "section": 12
    },
    {
      "no": 1137,
      "word": "elect",
      "meaning": "を選出する",
      "section": 12
    },
    {
      "no": 1138,
      "word": "extract",
      "meaning": "を取り［搾り］出す；を抜粋する",
      "section": 12
    },
    {
      "no": 1139,
      "word": "inherit",
      "meaning": "を受け継ぐ；を相続する",
      "section": 12
    },
    {
      "no": 1140,
      "word": "rear",
      "meaning": "（人・動物・植物）を育てる（≒ raise）",
      "section": 12
    },
    {
      "no": 1141,
      "word": "empathy",
      "meaning": "感情移入，共感",
      "section": 12
    },
    {
      "no": 1142,
      "word": "cue",
      "meaning": "合図；手がかり；（次の演技の）キュー",
      "section": 12
    },
    {
      "no": 1143,
      "word": "enterprise",
      "meaning": "企業，事業；企画；進取の気性",
      "section": 12
    },
    {
      "no": 1144,
      "word": "output",
      "meaning": "生産（高）；出力；排出（量）",
      "section": 12
    },
    {
      "no": 1145,
      "word": "congress",
      "meaning": "（米国などの）議会；会議",
      "section": 12
    },
    {
      "no": 1146,
      "word": "millennium",
      "meaning": "千年間，千年紀",
      "section": 12
    },
    {
      "no": 1147,
      "word": "mankind",
      "meaning": "人類",
      "section": 12
    },
    {
      "no": 1148,
      "word": "Muslim",
      "meaning": "イスラム教徒",
      "section": 12
    },
    {
      "no": 1149,
      "word": "estate",
      "meaning": "（動産・不動産などの）財産；私有地",
      "section": 12
    },
    {
      "no": 1150,
      "word": "landmine",
      "meaning": "地雷",
      "section": 12
    },
    {
      "no": 1151,
      "word": "caution",
      "meaning": "用心；警告",
      "section": 12
    },
    {
      "no": 1152,
      "word": "controversy",
      "meaning": "論争",
      "section": 12
    },
    {
      "no": 1153,
      "word": "consensus",
      "meaning": "総意；（意見の）一致",
      "section": 12
    },
    {
      "no": 1154,
      "word": "retail",
      "meaning": "小売り（⇔ wholesale 卸売り）",
      "section": 12
    },
    {
      "no": 1155,
      "word": "fiber",
      "meaning": "繊維（質）；本質；精神力",
      "section": 12
    },
    {
      "no": 1156,
      "word": "scent",
      "meaning": "（よい）香り；香水",
      "section": 12
    },
    {
      "no": 1157,
      "word": "beverage",
      "meaning": "（水以外の）飲み物，飲料",
      "section": 12
    },
    {
      "no": 1158,
      "word": "supplement",
      "meaning": "栄養補助剤，サプリメント；補足",
      "section": 12
    },
    {
      "no": 1159,
      "word": "diabetes",
      "meaning": "糖尿病",
      "section": 12
    },
    {
      "no": 1160,
      "word": "province",
      "meaning": "州，省；〔the ～s〕地方；分野",
      "section": 12
    },
    {
      "no": 1161,
      "word": "reef",
      "meaning": "（岩や砂の）礁；暗礁",
      "section": 12
    },
    {
      "no": 1162,
      "word": "microbe",
      "meaning": "微生物；細菌",
      "section": 12
    },
    {
      "no": 1163,
      "word": "excess",
      "meaning": "過剰，超過",
      "section": 12
    },
    {
      "no": 1164,
      "word": "gallery",
      "meaning": "美術館，画廊；観客，ギャラリー；回廊",
      "section": 12
    },
    {
      "no": 1165,
      "word": "fame",
      "meaning": "名声",
      "section": 12
    },
    {
      "no": 1166,
      "word": "deadline",
      "meaning": "締め切り",
      "section": 12
    },
    {
      "no": 1167,
      "word": "undergraduate",
      "meaning": "学部学生",
      "section": 12
    },
    {
      "no": 1168,
      "word": "slavery",
      "meaning": "奴隷制度；苦役",
      "section": 12
    },
    {
      "no": 1169,
      "word": "prey",
      "meaning": "獲物；犠牲者",
      "section": 12
    },
    {
      "no": 1170,
      "word": "mess",
      "meaning": "散らかった状態［物］；混乱状態",
      "section": 12
    },
    {
      "no": 1171,
      "word": "recession",
      "meaning": "不況；後退",
      "section": 12
    },
    {
      "no": 1172,
      "word": "retreat",
      "meaning": "後退，退却；（計画・決定などの）撤回",
      "section": 12
    },
    {
      "no": 1173,
      "word": "grave",
      "meaning": "墓；〔通例the ～〕死",
      "section": 12
    },
    {
      "no": 1174,
      "word": "column",
      "meaning": "コラム；（新聞などの）欄；円柱；（縦）列",
      "section": 12
    },
    {
      "no": 1175,
      "word": "scenery",
      "meaning": "〔集合的に〕景色；背景",
      "section": 12
    },
    {
      "no": 1176,
      "word": "plot",
      "meaning": "（小説などの）筋；陰謀",
      "section": 12
    },
    {
      "no": 1177,
      "word": "sculpture",
      "meaning": "彫刻（作品）",
      "section": 12
    },
    {
      "no": 1178,
      "word": "tablet",
      "meaning": "タブレット（型情報端末）；錠剤；平板",
      "section": 12
    },
    {
      "no": 1179,
      "word": "dense",
      "meaning": "密集した，密度の高い；（霧などが）濃い",
      "section": 12
    },
    {
      "no": 1180,
      "word": "exotic",
      "meaning": "外来の；異国風の",
      "section": 12
    },
    {
      "no": 1181,
      "word": "acid",
      "meaning": "酸性の；酸っぱい；辛辣な",
      "section": 12
    },
    {
      "no": 1182,
      "word": "bitter",
      "meaning": "苦い，つらい；辛辣な；怒りっぽい",
      "section": 12
    },
    {
      "no": 1183,
      "word": "sensible",
      "meaning": "賢明な；実用的な；顕著な",
      "section": 12
    },
    {
      "no": 1184,
      "word": "noble",
      "meaning": "高貴な；堂々とした；高潔な",
      "section": 12
    },
    {
      "no": 1185,
      "word": "vague",
      "meaning": "漠然とした，あいまいな；おぼろげな",
      "section": 12
    },
    {
      "no": 1186,
      "word": "parallel",
      "meaning": "（～と）平行［並行］の（to）；類似した",
      "section": 12
    },
    {
      "no": 1187,
      "word": "tense",
      "meaning": "張り詰めた，緊張した",
      "section": 12
    },
    {
      "no": 1188,
      "word": "vertical",
      "meaning": "垂直の（⇔ horizontal 水平な）；縦方向の",
      "section": 12
    },
    {
      "no": 1189,
      "word": "indigenous",
      "meaning": "原産の，先住の；（その土地に）固有の",
      "section": 12
    },
    {
      "no": 1190,
      "word": "aboriginal",
      "meaning": "〔通例A～〕アボリジニの；原生の，先住の",
      "section": 12
    },
    {
      "no": 1191,
      "word": "seasonal",
      "meaning": "季節の，季節的な",
      "section": 12
    },
    {
      "no": 1192,
      "word": "abundant",
      "meaning": "豊富な；（～に）富む（in）",
      "section": 12
    },
    {
      "no": 1193,
      "word": "hybrid",
      "meaning": "ハイブリッドの；雑種の；混成の",
      "section": 12
    },
    {
      "no": 1194,
      "word": "irrelevant",
      "meaning": "（～にとって）無関係の（to）；見当違いの",
      "section": 12
    },
    {
      "no": 1195,
      "word": "ridiculous",
      "meaning": "ばかげた；法外な",
      "section": 12
    },
    {
      "no": 1196,
      "word": "fairy",
      "meaning": "妖精の（ような）",
      "section": 12
    },
    {
      "no": 1197,
      "word": "sensory",
      "meaning": "感覚の",
      "section": 12
    },
    {
      "no": 1198,
      "word": "chronic",
      "meaning": "慢性の（⇔ acute ⇒ 1486）；長引く；常習の",
      "section": 12
    },
    {
      "no": 1199,
      "word": "voluntary",
      "meaning": "自発的な（⇔ compulsory ⇒ 1384）；無償の",
      "section": 12
    },
    {
      "no": 1200,
      "word": "inclined",
      "meaning": "傾向がある；傾いた",
      "section": 12
    },
    {
      "no": 1201,
      "word": "infer",
      "meaning": "を推論する，推測する",
      "section": 13
    },
    {
      "no": 1202,
      "word": "esteem",
      "meaning": "を尊敬する；を見なす",
      "section": 13
    },
    {
      "no": 1203,
      "word": "tackle",
      "meaning": "に取り組む；と（～のことで）話をつける（about / on）",
      "section": 13
    },
    {
      "no": 1204,
      "word": "venture",
      "meaning": "危険を冒して進む；を思い切ってする",
      "section": 13
    },
    {
      "no": 1205,
      "word": "accelerate",
      "meaning": "を加速させる，促進する；加速する",
      "section": 13
    },
    {
      "no": 1206,
      "word": "accustom",
      "meaning": "（人）を慣れさせる",
      "section": 13
    },
    {
      "no": 1207,
      "word": "amuse",
      "meaning": "をおもしろがらせる，楽しませる",
      "section": 13
    },
    {
      "no": 1208,
      "word": "flourish",
      "meaning": "繁栄する；繁茂する；を振りかざす",
      "section": 13
    },
    {
      "no": 1209,
      "word": "thrive",
      "meaning": "繁栄する，うまくいく；繁茂する",
      "section": 13
    },
    {
      "no": 1210,
      "word": "nurture",
      "meaning": "をはぐくむ；を養成する",
      "section": 13
    },
    {
      "no": 1211,
      "word": "click",
      "meaning": "（を）クリックする；をカチッと鳴らす；カチッと音がする",
      "section": 13
    },
    {
      "no": 1212,
      "word": "spin",
      "meaning": "回転する；を回転させる；（糸）を紡ぐ",
      "section": 13
    },
    {
      "no": 1213,
      "word": "clip",
      "meaning": "を切り抜く；を（はさみで）切り取る；をクリップで留める",
      "section": 13
    },
    {
      "no": 1214,
      "word": "drag",
      "meaning": "を引きずる；ぐずぐずする",
      "section": 13
    },
    {
      "no": 1215,
      "word": "cast",
      "meaning": "を投じる；に役を当てる",
      "section": 13
    },
    {
      "no": 1216,
      "word": "scatter",
      "meaning": "をまき散らす；分散する",
      "section": 13
    },
    {
      "no": 1217,
      "word": "tempt",
      "meaning": "を（...する）気にさせる（to do）；を引きつける",
      "section": 13
    },
    {
      "no": 1218,
      "word": "withdraw",
      "meaning": "を引き出す；を撤回する；撤退する",
      "section": 13
    },
    {
      "no": 1219,
      "word": "yawn",
      "meaning": "あくびをする",
      "section": 13
    },
    {
      "no": 1220,
      "word": "blink",
      "meaning": "まばたきする；点滅する；（目）をまたたく",
      "section": 13
    },
    {
      "no": 1221,
      "word": "dye",
      "meaning": "を染める；染まる",
      "section": 13
    },
    {
      "no": 1222,
      "word": "spill",
      "meaning": "をこぼす；こぼれる",
      "section": 13
    },
    {
      "no": 1223,
      "word": "irritate",
      "meaning": "をいらいらさせる；をひりひりさせる",
      "section": 13
    },
    {
      "no": 1224,
      "word": "insult",
      "meaning": "を侮辱する（≒ affront）",
      "section": 13
    },
    {
      "no": 1225,
      "word": "enforce",
      "meaning": "を施行［実施］する；を（～に）強制する（on / upon）",
      "section": 13
    },
    {
      "no": 1226,
      "word": "rob",
      "meaning": "から（金品を）奪う",
      "section": 13
    },
    {
      "no": 1227,
      "word": "drain",
      "meaning": "（液体）を流出させる；（液体が）流れ出る",
      "section": 13
    },
    {
      "no": 1228,
      "word": "suspend",
      "meaning": "を停職［停学，出場停止］にする；を一時的に中断する",
      "section": 13
    },
    {
      "no": 1229,
      "word": "drift",
      "meaning": "漂う；さまよう；を押し流す",
      "section": 13
    },
    {
      "no": 1230,
      "word": "forgive",
      "meaning": "を許す；を免除する",
      "section": 13
    },
    {
      "no": 1231,
      "word": "revise",
      "meaning": "を修正する；を改訂する",
      "section": 13
    },
    {
      "no": 1232,
      "word": "recruit",
      "meaning": "を募る；に新人を補充する",
      "section": 13
    },
    {
      "no": 1233,
      "word": "twist",
      "meaning": "をねじる，ひねる；を歪曲する",
      "section": 13
    },
    {
      "no": 1234,
      "word": "crush",
      "meaning": "を押しつぶす；を弾圧する；を絞り出す",
      "section": 13
    },
    {
      "no": 1235,
      "word": "pin",
      "meaning": "をピンで留める；を突き刺す",
      "section": 13
    },
    {
      "no": 1236,
      "word": "uncover",
      "meaning": "を暴く（⇔ conceal ⇒ 1116）；を 発掘する",
      "section": 13
    },
    {
      "no": 1237,
      "word": "exploit",
      "meaning": "を活用する；を搾取する，につけ込む",
      "section": 13
    },
    {
      "no": 1238,
      "word": "implement",
      "meaning": "を実行［実施］する",
      "section": 13
    },
    {
      "no": 1239,
      "word": "integrate",
      "meaning": "を統合する；融合する",
      "section": 13
    },
    {
      "no": 1240,
      "word": "incorporate",
      "meaning": "を取り入れる；を法人にする；合併する",
      "section": 13
    },
    {
      "no": 1241,
      "word": "profile",
      "meaning": "人物の紹介；横顔；輪郭",
      "section": 13
    },
    {
      "no": 1242,
      "word": "appetite",
      "meaning": "食欲；欲求",
      "section": 13
    },
    {
      "no": 1243,
      "word": "impulse",
      "meaning": "衝動；刺激",
      "section": 13
    },
    {
      "no": 1244,
      "word": "script",
      "meaning": "台本；筆跡",
      "section": 13
    },
    {
      "no": 1245,
      "word": "anniversary",
      "meaning": "（～周年）記念日",
      "section": 13
    },
    {
      "no": 1246,
      "word": "pension",
      "meaning": "年金",
      "section": 13
    },
    {
      "no": 1247,
      "word": "temper",
      "meaning": "気質，気性；機嫌；かんしゃく",
      "section": 13
    },
    {
      "no": 1248,
      "word": "cortex",
      "meaning": "皮質；樹皮",
      "section": 13
    },
    {
      "no": 1249,
      "word": "syndrome",
      "meaning": "症候群；～現象",
      "section": 13
    },
    {
      "no": 1250,
      "word": "chamber",
      "meaning": "（特定の目的の）部屋；議場；〔the ～〕議院",
      "section": 13
    },
    {
      "no": 1251,
      "word": "utility",
      "meaning": "公共事業；公共料金；実用性",
      "section": 13
    },
    {
      "no": 1252,
      "word": "cattle",
      "meaning": "〔集合的に〕牛",
      "section": 13
    },
    {
      "no": 1253,
      "word": "herd",
      "meaning": "（牛などの）群れ；群衆",
      "section": 13
    },
    {
      "no": 1254,
      "word": "fluid",
      "meaning": "流動体，液体",
      "section": 13
    },
    {
      "no": 1255,
      "word": "pity",
      "meaning": "残念なこと；哀れみ",
      "section": 13
    },
    {
      "no": 1256,
      "word": "priest",
      "meaning": "聖職者",
      "section": 13
    },
    {
      "no": 1257,
      "word": "acquaintance",
      "meaning": "知人；面識；知識",
      "section": 13
    },
    {
      "no": 1258,
      "word": "offspring",
      "meaning": "子孫，子；成果",
      "section": 13
    },
    {
      "no": 1259,
      "word": "famine",
      "meaning": "飢饉；（食糧・物資の）ひどい不足",
      "section": 13
    },
    {
      "no": 1260,
      "word": "deforestation",
      "meaning": "森林伐採",
      "section": 13
    },
    {
      "no": 1261,
      "word": "jail",
      "meaning": "刑務所，拘置所（≒ prison）",
      "section": 13
    },
    {
      "no": 1262,
      "word": "commodity",
      "meaning": "商品；有用なもの",
      "section": 13
    },
    {
      "no": 1263,
      "word": "format",
      "meaning": "書式，形式；（本などの）型",
      "section": 13
    },
    {
      "no": 1264,
      "word": "recipient",
      "meaning": "受け取る人；（臓器などの）被提供者",
      "section": 13
    },
    {
      "no": 1265,
      "word": "drill",
      "meaning": "訓練；（反復）練習；ドリル，錐",
      "section": 13
    },
    {
      "no": 1266,
      "word": "inability",
      "meaning": "無能，無力",
      "section": 13
    },
    {
      "no": 1267,
      "word": "republic",
      "meaning": "共和国；共和制",
      "section": 13
    },
    {
      "no": 1268,
      "word": "combat",
      "meaning": "戦闘；対立",
      "section": 13
    },
    {
      "no": 1269,
      "word": "debris",
      "meaning": "（破壊された後の）残骸，瓦礫；がらくた",
      "section": 13
    },
    {
      "no": 1270,
      "word": "bug",
      "meaning": "病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥",
      "section": 13
    },
    {
      "no": 1271,
      "word": "fraction",
      "meaning": "わずか（≒ bit），一部；分数",
      "section": 13
    },
    {
      "no": 1272,
      "word": "index",
      "meaning": "指標；索引；指数",
      "section": 13
    },
    {
      "no": 1273,
      "word": "intuition",
      "meaning": "直観（力），直感",
      "section": 13
    },
    {
      "no": 1274,
      "word": "motive",
      "meaning": "動機",
      "section": 13
    },
    {
      "no": 1275,
      "word": "consent",
      "meaning": "同意，承諾",
      "section": 13
    },
    {
      "no": 1276,
      "word": "hierarchy",
      "meaning": "（社会の）階層制；〔the ～〕支配層",
      "section": 13
    },
    {
      "no": 1277,
      "word": "monument",
      "meaning": "記念碑，遺跡；金字塔",
      "section": 13
    },
    {
      "no": 1278,
      "word": "asset",
      "meaning": "〔通例～s〕資産；価値のあるもの；利点",
      "section": 13
    },
    {
      "no": 1279,
      "word": "decent",
      "meaning": "まずまずの；きちんとした；上品な",
      "section": 13
    },
    {
      "no": 1280,
      "word": "competent",
      "meaning": "有能な；適任の；満足できる",
      "section": 13
    },
    {
      "no": 1281,
      "word": "straightforward",
      "meaning": "単純な；率直な",
      "section": 13
    },
    {
      "no": 1282,
      "word": "cosmetic",
      "meaning": "化粧の，美容の；うわべの",
      "section": 13
    },
    {
      "no": 1283,
      "word": "delicate",
      "meaning": "繊細な；扱いにくい；もろい",
      "section": 13
    },
    {
      "no": 1284,
      "word": "interior",
      "meaning": "室内の；内部の（⇔ exterior 外部の）",
      "section": 13
    },
    {
      "no": 1285,
      "word": "transparent",
      "meaning": "透明な；明快な",
      "section": 13
    },
    {
      "no": 1286,
      "word": "aesthetic",
      "meaning": "美的な；美学の",
      "section": 13
    },
    {
      "no": 1287,
      "word": "deliberate",
      "meaning": "故意の；慎重な",
      "section": 13
    },
    {
      "no": 1288,
      "word": "demographic",
      "meaning": "人口統計学の",
      "section": 13
    },
    {
      "no": 1289,
      "word": "prehistoric",
      "meaning": "有史以前の；旧式な",
      "section": 13
    },
    {
      "no": 1290,
      "word": "innate",
      "meaning": "生まれながらの；固有の",
      "section": 13
    },
    {
      "no": 1291,
      "word": "mild",
      "meaning": "穏やかな；（程度が）軽い",
      "section": 13
    },
    {
      "no": 1292,
      "word": "toxic",
      "meaning": "有毒な；中毒性の",
      "section": 13
    },
    {
      "no": 1293,
      "word": "ashamed",
      "meaning": "恥じて",
      "section": 13
    },
    {
      "no": 1294,
      "word": "humble",
      "meaning": "謙虚な；質素な；身分が低い",
      "section": 13
    },
    {
      "no": 1295,
      "word": "peculiar",
      "meaning": "特有の；特異な",
      "section": 13
    },
    {
      "no": 1296,
      "word": "steep",
      "meaning": "（傾斜が）急な；急激な；法外な",
      "section": 13
    },
    {
      "no": 1297,
      "word": "trivial",
      "meaning": "ささいな，取るに足りない",
      "section": 13
    },
    {
      "no": 1298,
      "word": "magnificent",
      "meaning": "壮大な；見事な",
      "section": 13
    },
    {
      "no": 1299,
      "word": "wireless",
      "meaning": "無線（電信）の，ラジオの",
      "section": 13
    },
    {
      "no": 1300,
      "word": "ongoing",
      "meaning": "継続している，進行中の",
      "section": 13
    },
    {
      "no": 1301,
      "word": "assure",
      "meaning": "に自信を持って言う；を保証する",
      "section": 14
    },
    {
      "no": 1302,
      "word": "precede",
      "meaning": "に先行する；に優先する",
      "section": 14
    },
    {
      "no": 1303,
      "word": "revive",
      "meaning": "を復活させる；復活する",
      "section": 14
    },
    {
      "no": 1304,
      "word": "compel",
      "meaning": "に強いる",
      "section": 14
    },
    {
      "no": 1305,
      "word": "blossom",
      "meaning": "花が咲く（≒ bloom）；発展する",
      "section": 14
    },
    {
      "no": 1306,
      "word": "terrify",
      "meaning": "を怖がらせる；を脅かす",
      "section": 14
    },
    {
      "no": 1307,
      "word": "violate",
      "meaning": "（法律・規則など）に違反する；を侵害する",
      "section": 14
    },
    {
      "no": 1308,
      "word": "suppress",
      "meaning": "を抑える；を抑圧する",
      "section": 14
    },
    {
      "no": 1309,
      "word": "deceive",
      "meaning": "をだます（≒ take in）",
      "section": 14
    },
    {
      "no": 1310,
      "word": "manipulate",
      "meaning": "を（巧みに）操る；を改ざんする",
      "section": 14
    },
    {
      "no": 1311,
      "word": "starve",
      "meaning": "飢える；（～を）渇望する（for）；を飢えさせる",
      "section": 14
    },
    {
      "no": 1312,
      "word": "flee",
      "meaning": "（から）逃げる",
      "section": 14
    },
    {
      "no": 1313,
      "word": "whisper",
      "meaning": "（を）ささやく",
      "section": 14
    },
    {
      "no": 1314,
      "word": "yell",
      "meaning": "叫ぶ，どなる",
      "section": 14
    },
    {
      "no": 1315,
      "word": "deposit",
      "meaning": "を置く；を預ける；を堆積させる",
      "section": 14
    },
    {
      "no": 1316,
      "word": "confine",
      "meaning": "を限定する；〔通例受身形で〕閉じ込められる",
      "section": 14
    },
    {
      "no": 1317,
      "word": "swing",
      "meaning": "を揺らす，振る；揺れる；（行動に）さっと移る",
      "section": 14
    },
    {
      "no": 1318,
      "word": "prolong",
      "meaning": "を長引かせる",
      "section": 14
    },
    {
      "no": 1319,
      "word": "depict",
      "meaning": "を描く",
      "section": 14
    },
    {
      "no": 1320,
      "word": "outline",
      "meaning": "の要点を述べる；の輪郭を描く",
      "section": 14
    },
    {
      "no": 1321,
      "word": "shed",
      "meaning": "を捨て去る；（光など）を放つ；（涙・血）を流す",
      "section": 14
    },
    {
      "no": 1322,
      "word": "emit",
      "meaning": "（光・熱など）を出す，排出する；（信号）を送る",
      "section": 14
    },
    {
      "no": 1323,
      "word": "renew",
      "meaning": "を更新する；（資源）を再生する",
      "section": 14
    },
    {
      "no": 1324,
      "word": "utilize",
      "meaning": "を利用する（≒ make use of）",
      "section": 14
    },
    {
      "no": 1325,
      "word": "assert",
      "meaning": "を主張する",
      "section": 14
    },
    {
      "no": 1326,
      "word": "strain",
      "meaning": "に負担をかける；を緊張させる；を漉す",
      "section": 14
    },
    {
      "no": 1327,
      "word": "strive",
      "meaning": "努力する；争う",
      "section": 14
    },
    {
      "no": 1328,
      "word": "dare",
      "meaning": "あえて［思い切って］...する",
      "section": 14
    },
    {
      "no": 1329,
      "word": "boast",
      "meaning": "を誇る；（を）自慢する",
      "section": 14
    },
    {
      "no": 1330,
      "word": "startle",
      "meaning": "をびっくりさせる（≒ surprise）",
      "section": 14
    },
    {
      "no": 1331,
      "word": "offend",
      "meaning": "の気分を害する；（に）違反する",
      "section": 14
    },
    {
      "no": 1332,
      "word": "compute",
      "meaning": "（を）計算する；コンピューターを使う",
      "section": 14
    },
    {
      "no": 1333,
      "word": "assemble",
      "meaning": "を集める；を組み立てる；集まる",
      "section": 14
    },
    {
      "no": 1334,
      "word": "worsen",
      "meaning": "を悪化させる；悪化する（≒ deteriorate）",
      "section": 14
    },
    {
      "no": 1335,
      "word": "flip",
      "meaning": "を（ぱっと）裏返す；を軽くはじく",
      "section": 14
    },
    {
      "no": 1336,
      "word": "rub",
      "meaning": "（を）こする；（～に）を塗る（on / over）",
      "section": 14
    },
    {
      "no": 1337,
      "word": "descend",
      "meaning": "（を）降りる（⇔ ascend ⇒ 1839）；受け継がれる",
      "section": 14
    },
    {
      "no": 1338,
      "word": "compensate",
      "meaning": "補償する（≒ make up）；に償う",
      "section": 14
    },
    {
      "no": 1339,
      "word": "comprise",
      "meaning": "から成る；を構成する",
      "section": 14
    },
    {
      "no": 1340,
      "word": "prevail",
      "meaning": "普及している；支配的である；（～に）打ち勝つ（over）",
      "section": 14
    },
    {
      "no": 1341,
      "word": "quest",
      "meaning": "探究",
      "section": 14
    },
    {
      "no": 1342,
      "word": "dignity",
      "meaning": "尊厳；威厳",
      "section": 14
    },
    {
      "no": 1343,
      "word": "criterion",
      "meaning": "（判断・評価の）基準",
      "section": 14
    },
    {
      "no": 1344,
      "word": "paradox",
      "meaning": "逆説；矛盾",
      "section": 14
    },
    {
      "no": 1345,
      "word": "parliament",
      "meaning": "（英国などの）議会；国会議員（団）",
      "section": 14
    },
    {
      "no": 1346,
      "word": "legislation",
      "meaning": "法律；立法",
      "section": 14
    },
    {
      "no": 1347,
      "word": "agenda",
      "meaning": "協議事項（リスト）；議事日程（表）；（政治上の）課題",
      "section": 14
    },
    {
      "no": 1348,
      "word": "mainstream",
      "meaning": "（活動・思潮などの）主流；大勢",
      "section": 14
    },
    {
      "no": 1349,
      "word": "troop",
      "meaning": "〔～s〕軍隊；集団",
      "section": 14
    },
    {
      "no": 1350,
      "word": "epidemic",
      "meaning": "流行（病）；蔓延",
      "section": 14
    },
    {
      "no": 1351,
      "word": "outbreak",
      "meaning": "発生，勃発",
      "section": 14
    },
    {
      "no": 1352,
      "word": "chaos",
      "meaning": "混沌，大混乱",
      "section": 14
    },
    {
      "no": 1353,
      "word": "nightmare",
      "meaning": "悪夢（のような状況）；不安感",
      "section": 14
    },
    {
      "no": 1354,
      "word": "horror",
      "meaning": "恐怖；強い嫌悪；嫌な物［人］",
      "section": 14
    },
    {
      "no": 1355,
      "word": "cluster",
      "meaning": "集団；（植物の）房，束",
      "section": 14
    },
    {
      "no": 1356,
      "word": "pollen",
      "meaning": "花粉",
      "section": 14
    },
    {
      "no": 1357,
      "word": "hive",
      "meaning": "ミツバチの巣（箱）；人の集まる所",
      "section": 14
    },
    {
      "no": 1358,
      "word": "irrigation",
      "meaning": "灌漑",
      "section": 14
    },
    {
      "no": 1359,
      "word": "dose",
      "meaning": "（薬の1回分の）服用量；放射線の1回の照射量",
      "section": 14
    },
    {
      "no": 1360,
      "word": "suicide",
      "meaning": "自殺；自殺的行為",
      "section": 14
    },
    {
      "no": 1361,
      "word": "feast",
      "meaning": "祝宴；大ごちそう；楽しみ",
      "section": 14
    },
    {
      "no": 1362,
      "word": "cuisine",
      "meaning": "（独特の）料理，料理法",
      "section": 14
    },
    {
      "no": 1363,
      "word": "rumor",
      "meaning": "うわさ",
      "section": 14
    },
    {
      "no": 1364,
      "word": "proverb",
      "meaning": "ことわざ（≒ saying）",
      "section": 14
    },
    {
      "no": 1365,
      "word": "signature",
      "meaning": "署名；特徴",
      "section": 14
    },
    {
      "no": 1366,
      "word": "formula",
      "meaning": "方法，解決策；公式",
      "section": 14
    },
    {
      "no": 1367,
      "word": "tuition",
      "meaning": "【主に米】 授業料（＝ 【英】tuition fees）；（個人）指導",
      "section": 14
    },
    {
      "no": 1368,
      "word": "intake",
      "meaning": "摂取量；受け入れ数；取り入れること",
      "section": 14
    },
    {
      "no": 1369,
      "word": "spectrum",
      "meaning": "スペクトル；（波動・変動の）範囲",
      "section": 14
    },
    {
      "no": 1370,
      "word": "kidney",
      "meaning": "腎臓",
      "section": 14
    },
    {
      "no": 1371,
      "word": "gear",
      "meaning": "用具（一式），器具；歯車；ギア",
      "section": 14
    },
    {
      "no": 1372,
      "word": "aisle",
      "meaning": "（座席間などの）通路",
      "section": 14
    },
    {
      "no": 1373,
      "word": "grief",
      "meaning": "深い悲しみ",
      "section": 14
    },
    {
      "no": 1374,
      "word": "destiny",
      "meaning": "運命",
      "section": 14
    },
    {
      "no": 1375,
      "word": "skull",
      "meaning": "頭骨，頭蓋骨；頭脳",
      "section": 14
    },
    {
      "no": 1376,
      "word": "tomb",
      "meaning": "墓",
      "section": 14
    },
    {
      "no": 1377,
      "word": "monk",
      "meaning": "修道士，僧（⇔ nun 修道女，尼）",
      "section": 14
    },
    {
      "no": 1378,
      "word": "worship",
      "meaning": "崇拝，礼拝（式）；賛美",
      "section": 14
    },
    {
      "no": 1379,
      "word": "outstanding",
      "meaning": "際立った；未払いの；未解決の",
      "section": 14
    },
    {
      "no": 1380,
      "word": "unprecedented",
      "meaning": "前例のない；空前の",
      "section": 14
    },
    {
      "no": 1381,
      "word": "infinite",
      "meaning": "無限の（⇔ finite 有限の）；無数の",
      "section": 14
    },
    {
      "no": 1382,
      "word": "worthwhile",
      "meaning": "価値がある；立派な",
      "section": 14
    },
    {
      "no": 1383,
      "word": "indispensable",
      "meaning": "不可欠な（⇔ dispensable なくてもすむ）",
      "section": 14
    },
    {
      "no": 1384,
      "word": "compulsory",
      "meaning": "義務的な，強制的な（⇔ voluntary ⇒ 1199）",
      "section": 14
    },
    {
      "no": 1385,
      "word": "probable",
      "meaning": "十分にありそうな",
      "section": 14
    },
    {
      "no": 1386,
      "word": "ambiguous",
      "meaning": "あいまいな；多義的な",
      "section": 14
    },
    {
      "no": 1387,
      "word": "obscure",
      "meaning": "（世に）知られていない；不明瞭な",
      "section": 14
    },
    {
      "no": 1388,
      "word": "skeptical",
      "meaning": "（～に）懐疑的な（of ⇒ about）",
      "section": 14
    },
    {
      "no": 1389,
      "word": "fragile",
      "meaning": "壊れやすい；虚弱な",
      "section": 14
    },
    {
      "no": 1390,
      "word": "static",
      "meaning": "静的な（⇔ dynamic ⇒ 1083）；動きのない",
      "section": 14
    },
    {
      "no": 1391,
      "word": "gradual",
      "meaning": "徐々の，緩やかな",
      "section": 14
    },
    {
      "no": 1392,
      "word": "vocal",
      "meaning": "声の，発声の；はっきりものを言う",
      "section": 14
    },
    {
      "no": 1393,
      "word": "vivid",
      "meaning": "鮮やかな；生き生きとした",
      "section": 14
    },
    {
      "no": 1394,
      "word": "imperial",
      "meaning": "帝国の；皇帝の",
      "section": 14
    },
    {
      "no": 1395,
      "word": "hostile",
      "meaning": "敵意のある（⇔friendly 友好的な）",
      "section": 14
    },
    {
      "no": 1396,
      "word": "superficial",
      "meaning": "表面的な",
      "section": 14
    },
    {
      "no": 1397,
      "word": "scarce",
      "meaning": "乏しい；珍しい",
      "section": 14
    },
    {
      "no": 1398,
      "word": "gross",
      "meaning": "総計の；甚だしい；粗野な",
      "section": 14
    },
    {
      "no": 1399,
      "word": "inherent",
      "meaning": "生来の，本来的に備わっている",
      "section": 14
    },
    {
      "no": 1400,
      "word": "notable",
      "meaning": "注目に値する；著名な",
      "section": 14
    },
    {
      "no": 1401,
      "word": "update",
      "meaning": "を最新のものにする；をアップデートする",
      "section": 15
    },
    {
      "no": 1402,
      "word": "refresh",
      "meaning": "（気分）をさわやかにする；（記憶など）を新たにする；を最新のものにする",
      "section": 15
    },
    {
      "no": 1403,
      "word": "bloom",
      "meaning": "花が咲く；栄える",
      "section": 15
    },
    {
      "no": 1404,
      "word": "conquer",
      "meaning": "を征服する；を克服する",
      "section": 15
    },
    {
      "no": 1405,
      "word": "induce",
      "meaning": "を引き起こす；を説得する",
      "section": 15
    },
    {
      "no": 1406,
      "word": "attain",
      "meaning": "を獲得する，達成する；に達する",
      "section": 15
    },
    {
      "no": 1407,
      "word": "spray",
      "meaning": "を吹きかける，に吹きつける",
      "section": 15
    },
    {
      "no": 1408,
      "word": "retrieve",
      "meaning": "（情報）を検索する；を取り戻す；を回復する",
      "section": 15
    },
    {
      "no": 1409,
      "word": "portray",
      "meaning": "を描く；（の役）を演じる",
      "section": 15
    },
    {
      "no": 1410,
      "word": "scratch",
      "meaning": "を引っかく；を取り消す，削除する",
      "section": 15
    },
    {
      "no": 1411,
      "word": "designate",
      "meaning": "を指定する；を任命する",
      "section": 15
    },
    {
      "no": 1412,
      "word": "contradict",
      "meaning": "と矛盾する；に反対意見を言う",
      "section": 15
    },
    {
      "no": 1413,
      "word": "sigh",
      "meaning": "ため息をつく",
      "section": 15
    },
    {
      "no": 1414,
      "word": "disrupt",
      "meaning": "を混乱させる；を分裂させる",
      "section": 15
    },
    {
      "no": 1415,
      "word": "depart",
      "meaning": "出発する；（～から）それる（from）",
      "section": 15
    },
    {
      "no": 1416,
      "word": "navigate",
      "meaning": "（を）誘導する；（を）操縦する；（を）航行する",
      "section": 15
    },
    {
      "no": 1417,
      "word": "beg",
      "meaning": "に（～を）切に頼む（for）；（を）懇願する",
      "section": 15
    },
    {
      "no": 1418,
      "word": "inhabit",
      "meaning": "に住んでいる；に宿る，存する",
      "section": 15
    },
    {
      "no": 1419,
      "word": "diagnose",
      "meaning": "（を）診断する",
      "section": 15
    },
    {
      "no": 1420,
      "word": "comprehend",
      "meaning": "を理解する",
      "section": 15
    },
    {
      "no": 1421,
      "word": "oblige",
      "meaning": "に義務づける；に恩恵を施す",
      "section": 15
    },
    {
      "no": 1422,
      "word": "cram",
      "meaning": "に詰め込む；詰め込み勉強をする",
      "section": 15
    },
    {
      "no": 1423,
      "word": "flock",
      "meaning": "群がる，集まる",
      "section": 15
    },
    {
      "no": 1424,
      "word": "underestimate",
      "meaning": "（を）過小評価する（⇔ overestimate （を）過大評価する）；（を）軽く見る；を少なく見積もる",
      "section": 15
    },
    {
      "no": 1425,
      "word": "clarify",
      "meaning": "を明確にする",
      "section": 15
    },
    {
      "no": 1426,
      "word": "spark",
      "meaning": "を引き起こす；を刺激する；スパークする",
      "section": 15
    },
    {
      "no": 1427,
      "word": "seize",
      "meaning": "をつかむ；を奪い取る；を没収する",
      "section": 15
    },
    {
      "no": 1428,
      "word": "soar",
      "meaning": "急上昇する；空高く飛ぶ",
      "section": 15
    },
    {
      "no": 1429,
      "word": "glow",
      "meaning": "光り［照り］輝く；赤く燃える；紅潮する",
      "section": 15
    },
    {
      "no": 1430,
      "word": "disguise",
      "meaning": "を（～に）変装させる（as）；を偽る",
      "section": 15
    },
    {
      "no": 1431,
      "word": "distort",
      "meaning": "を歪める；歪む",
      "section": 15
    },
    {
      "no": 1432,
      "word": "undermine",
      "meaning": "を徐々にむしばむ；を侵食する",
      "section": 15
    },
    {
      "no": 1433,
      "word": "abolish",
      "meaning": "を廃止する（≒ do away with）",
      "section": 15
    },
    {
      "no": 1434,
      "word": "strip",
      "meaning": "を［から］取り去る；を裸にする",
      "section": 15
    },
    {
      "no": 1435,
      "word": "dispose",
      "meaning": "〔dispose ofで〕を処分する；を（...する）気にさせる（to do）；を配置する",
      "section": 15
    },
    {
      "no": 1436,
      "word": "dump",
      "meaning": "を投棄する；をどさっと落とす",
      "section": 15
    },
    {
      "no": 1437,
      "word": "weave",
      "meaning": "を織る；（計画・物語など）を作り上げる",
      "section": 15
    },
    {
      "no": 1438,
      "word": "refine",
      "meaning": "を洗練する；を精製する",
      "section": 15
    },
    {
      "no": 1439,
      "word": "enrich",
      "meaning": "を豊かにする；（物質）を濃縮化する",
      "section": 15
    },
    {
      "no": 1440,
      "word": "coordinate",
      "meaning": "を調整する；を組織する；（服など）をコーディネートする",
      "section": 15
    },
    {
      "no": 1441,
      "word": "headline",
      "meaning": "（新聞などの）見出し",
      "section": 15
    },
    {
      "no": 1442,
      "word": "internship",
      "meaning": "【米】 実務［医学］研修；研修期間",
      "section": 15
    },
    {
      "no": 1443,
      "word": "outlet",
      "meaning": "直売店，特売店；はけ口；【米】（電気の）コンセント（≒ 【英】socket）",
      "section": 15
    },
    {
      "no": 1444,
      "word": "remedy",
      "meaning": "治療（法）；治療薬；解決法",
      "section": 15
    },
    {
      "no": 1445,
      "word": "pill",
      "meaning": "錠剤，丸薬；〔the ～〕ピル，経口避妊薬",
      "section": 15
    },
    {
      "no": 1446,
      "word": "reception",
      "meaning": "反応；宴会；受付；受信（状態）",
      "section": 15
    },
    {
      "no": 1447,
      "word": "transaction",
      "meaning": "（商）取引；（人と人との）交流",
      "section": 15
    },
    {
      "no": 1448,
      "word": "mutation",
      "meaning": "突然変異（体）；変化",
      "section": 15
    },
    {
      "no": 1449,
      "word": "dairy",
      "meaning": "〔集合的に〕乳製品；乳製品加工所［販売者］",
      "section": 15
    },
    {
      "no": 1450,
      "word": "compassion",
      "meaning": "同情",
      "section": 15
    },
    {
      "no": 1451,
      "word": "posture",
      "meaning": "姿勢；心構え",
      "section": 15
    },
    {
      "no": 1452,
      "word": "curse",
      "meaning": "悪態，ののしりの言葉；呪い；〔通例a ～〕災い",
      "section": 15
    },
    {
      "no": 1453,
      "word": "funeral",
      "meaning": "葬式",
      "section": 15
    },
    {
      "no": 1454,
      "word": "census",
      "meaning": "国勢調査；交通調査",
      "section": 15
    },
    {
      "no": 1455,
      "word": "encyclopedia",
      "meaning": "百科事典",
      "section": 15
    },
    {
      "no": 1456,
      "word": "cereal",
      "meaning": "〔通例～s〕穀物；シリアル（穀物加工食品）",
      "section": 15
    },
    {
      "no": 1457,
      "word": "fragment",
      "meaning": "断片",
      "section": 15
    },
    {
      "no": 1458,
      "word": "patch",
      "meaning": "（～の）部分，斑点；継ぎ；貼り薬",
      "section": 15
    },
    {
      "no": 1459,
      "word": "rubbish",
      "meaning": "【英】 ごみ（≒ 【米】garbage）；つまらないもの",
      "section": 15
    },
    {
      "no": 1460,
      "word": "maze",
      "meaning": "迷路（≒ labyrinth）；複雑に込み入ったもの",
      "section": 15
    },
    {
      "no": 1461,
      "word": "outlook",
      "meaning": "見解；見通し；眺め",
      "section": 15
    },
    {
      "no": 1462,
      "word": "breakthrough",
      "meaning": "大発見，飛躍的進歩",
      "section": 15
    },
    {
      "no": 1463,
      "word": "triumph",
      "meaning": "勝利；勝利の喜び；偉業",
      "section": 15
    },
    {
      "no": 1464,
      "word": "ally",
      "meaning": "同盟国；提携者；援助者；盟友",
      "section": 15
    },
    {
      "no": 1465,
      "word": "spectator",
      "meaning": "（試合などの）観客",
      "section": 15
    },
    {
      "no": 1466,
      "word": "sphere",
      "meaning": "領域；球体；天体",
      "section": 15
    },
    {
      "no": 1467,
      "word": "county",
      "meaning": "【米】 郡；【英】州",
      "section": 15
    },
    {
      "no": 1468,
      "word": "behalf",
      "meaning": "利益，味方",
      "section": 15
    },
    {
      "no": 1469,
      "word": "interval",
      "meaning": "（時間の）間隔；合間；隔たり；小休止",
      "section": 15
    },
    {
      "no": 1470,
      "word": "circulation",
      "meaning": "循環；流通；（新聞・雑誌の）発行部数",
      "section": 15
    },
    {
      "no": 1471,
      "word": "blade",
      "meaning": "刃；（プロペラなどの）羽根；（草などの）葉",
      "section": 15
    },
    {
      "no": 1472,
      "word": "theft",
      "meaning": "窃盗（罪）",
      "section": 15
    },
    {
      "no": 1473,
      "word": "vacuum",
      "meaning": "真空；空虚",
      "section": 15
    },
    {
      "no": 1474,
      "word": "collision",
      "meaning": "衝突；対立",
      "section": 15
    },
    {
      "no": 1475,
      "word": "bargain",
      "meaning": "買い得品；取引；契約",
      "section": 15
    },
    {
      "no": 1476,
      "word": "landmark",
      "meaning": "（ある場所の）目印；画期的な出来事",
      "section": 15
    },
    {
      "no": 1477,
      "word": "revenue",
      "meaning": "歳入（⇔ expenditure 歳出）；収益",
      "section": 15
    },
    {
      "no": 1478,
      "word": "treaty",
      "meaning": "（国家間の）条約；協定",
      "section": 15
    },
    {
      "no": 1479,
      "word": "supreme",
      "meaning": "最高の",
      "section": 15
    },
    {
      "no": 1480,
      "word": "thorough",
      "meaning": "徹底的な；まったくの",
      "section": 15
    },
    {
      "no": 1481,
      "word": "naked",
      "meaning": "裸の",
      "section": 15
    },
    {
      "no": 1482,
      "word": "sincere",
      "meaning": "心からの；誠実な",
      "section": 15
    },
    {
      "no": 1483,
      "word": "tame",
      "meaning": "飼いならされた，人に慣れた；退屈な",
      "section": 15
    },
    {
      "no": 1484,
      "word": "insufficient",
      "meaning": "不十分な；不適当な",
      "section": 15
    },
    {
      "no": 1485,
      "word": "dim",
      "meaning": "薄暗い；ぼんやりした",
      "section": 15
    },
    {
      "no": 1486,
      "word": "acute",
      "meaning": "（痛み・感情などが）激しい；（知覚などが）鋭い；急性の（⇔ chronic ⇒ 1198）",
      "section": 15
    },
    {
      "no": 1487,
      "word": "disabled",
      "meaning": "障害のある；障害者用の",
      "section": 15
    },
    {
      "no": 1488,
      "word": "metropolitan",
      "meaning": "大都市の，首都圏の",
      "section": 15
    },
    {
      "no": 1489,
      "word": "monetary",
      "meaning": "金銭的な；金融の",
      "section": 15
    },
    {
      "no": 1490,
      "word": "alternate",
      "meaning": "代わりの（≒ alternative）；交互の",
      "section": 15
    },
    {
      "no": 1491,
      "word": "partial",
      "meaning": "部分的な；不公平な（⇔impartial 公平な）",
      "section": 15
    },
    {
      "no": 1492,
      "word": "divine",
      "meaning": "神の；神にささげる",
      "section": 15
    },
    {
      "no": 1493,
      "word": "drastic",
      "meaning": "徹底的な，抜本的な；極端な",
      "section": 15
    },
    {
      "no": 1494,
      "word": "fierce",
      "meaning": "猛烈な；どう猛な",
      "section": 15
    },
    {
      "no": 1495,
      "word": "sole",
      "meaning": "唯一の；単独の；独占的な",
      "section": 15
    },
    {
      "no": 1496,
      "word": "spontaneous",
      "meaning": "自然発生的な；自発的な",
      "section": 15
    },
    {
      "no": 1497,
      "word": "spatial",
      "meaning": "空間の",
      "section": 15
    },
    {
      "no": 1498,
      "word": "neat",
      "meaning": "きちんとした；見事な",
      "section": 15
    },
    {
      "no": 1499,
      "word": "tidy",
      "meaning": "きちんとした，整頓された；相当の",
      "section": 15
    },
    {
      "no": 1500,
      "word": "loyal",
      "meaning": "（～に）忠実な（to）；誠実な",
      "section": 15
    },
    {
      "no": 1501,
      "word": "bless",
      "meaning": "に恩恵を与える；に感謝する",
      "section": 16
    },
    {
      "no": 1502,
      "word": "regain",
      "meaning": "を取り戻す",
      "section": 16
    },
    {
      "no": 1503,
      "word": "conform",
      "meaning": "順応する；一致する",
      "section": 16
    },
    {
      "no": 1504,
      "word": "enroll",
      "meaning": "登録する，入会する；を登録させる",
      "section": 16
    },
    {
      "no": 1505,
      "word": "entitle",
      "meaning": "に権利を与える；に題名をつける",
      "section": 16
    },
    {
      "no": 1506,
      "word": "halt",
      "meaning": "を止める；止まる",
      "section": 16
    },
    {
      "no": 1507,
      "word": "provoke",
      "meaning": "（感情・行動など）を引き起こす；を挑発する",
      "section": 16
    },
    {
      "no": 1508,
      "word": "invade",
      "meaning": "を侵略する；を侵害する；（場所）に殺到する",
      "section": 16
    },
    {
      "no": 1509,
      "word": "squeeze",
      "meaning": "押し入る；を押し込む；（を）搾る；（を）強く押す",
      "section": 16
    },
    {
      "no": 1510,
      "word": "crawl",
      "meaning": "はう；ゆっくり進む",
      "section": 16
    },
    {
      "no": 1511,
      "word": "digest",
      "meaning": "を消化する；を理解する；を要約する",
      "section": 16
    },
    {
      "no": 1512,
      "word": "utter",
      "meaning": "（声）を発する；（考えなど）を述べる",
      "section": 16
    },
    {
      "no": 1513,
      "word": "refrain",
      "meaning": "控える",
      "section": 16
    },
    {
      "no": 1514,
      "word": "populate",
      "meaning": "に住む，の住民である；に人を住まわせる",
      "section": 16
    },
    {
      "no": 1515,
      "word": "accommodate",
      "meaning": "を収容する；を（～に）適応させる（to）",
      "section": 16
    },
    {
      "no": 1516,
      "word": "steer",
      "meaning": "（を）操縦する；を（～へ）向ける（to）",
      "section": 16
    },
    {
      "no": 1517,
      "word": "drown",
      "meaning": "溺死する；を水浸しにする",
      "section": 16
    },
    {
      "no": 1518,
      "word": "dip",
      "meaning": "を浸す；（手など）を（～に）突っ込む（into / in）；下がる",
      "section": 16
    },
    {
      "no": 1519,
      "word": "soak",
      "meaning": "を浸す；をずぶぬれにする；浸る",
      "section": 16
    },
    {
      "no": 1520,
      "word": "stir",
      "meaning": "をかき回す；を揺り動かす",
      "section": 16
    },
    {
      "no": 1521,
      "word": "transplant",
      "meaning": "を移植する；を移住させる",
      "section": 16
    },
    {
      "no": 1522,
      "word": "reassure",
      "meaning": "を安心させる",
      "section": 16
    },
    {
      "no": 1523,
      "word": "resume",
      "meaning": "（を）再開する；を取り戻す",
      "section": 16
    },
    {
      "no": 1524,
      "word": "speculate",
      "meaning": "（と）推測する；投機する",
      "section": 16
    },
    {
      "no": 1525,
      "word": "surpass",
      "meaning": "を上回る",
      "section": 16
    },
    {
      "no": 1526,
      "word": "appoint",
      "meaning": "を任命する；（日時・場所など）を指定する",
      "section": 16
    },
    {
      "no": 1527,
      "word": "intrigue",
      "meaning": "に興味を持たせる；陰謀を企てる",
      "section": 16
    },
    {
      "no": 1528,
      "word": "decay",
      "meaning": "腐敗する（≒ rot）；（徐々に）衰える",
      "section": 16
    },
    {
      "no": 1529,
      "word": "contaminate",
      "meaning": "を汚染する；を堕落させる",
      "section": 16
    },
    {
      "no": 1530,
      "word": "swell",
      "meaning": "膨張する，腫れる；を膨らませる",
      "section": 16
    },
    {
      "no": 1531,
      "word": "delete",
      "meaning": "を削除する，消す",
      "section": 16
    },
    {
      "no": 1532,
      "word": "tolerate",
      "meaning": "を許容する，我慢する（≒ put up with）",
      "section": 16
    },
    {
      "no": 1533,
      "word": "envy",
      "meaning": "をうらやむ",
      "section": 16
    },
    {
      "no": 1534,
      "word": "pray",
      "meaning": "（を）祈る",
      "section": 16
    },
    {
      "no": 1535,
      "word": "confess",
      "meaning": "（を）告白する",
      "section": 16
    },
    {
      "no": 1536,
      "word": "resign",
      "meaning": "（を）辞任する；を放棄する",
      "section": 16
    },
    {
      "no": 1537,
      "word": "dissolve",
      "meaning": "（を）溶かす；（議会など）を解散する；（契約など）を解消する；溶ける",
      "section": 16
    },
    {
      "no": 1538,
      "word": "unfold",
      "meaning": "（閉じたもの）を開く；を明らかにする；開く；明らかになる",
      "section": 16
    },
    {
      "no": 1539,
      "word": "awaken",
      "meaning": "を目覚めさせる；（～から）覚める（from）",
      "section": 16
    },
    {
      "no": 1540,
      "word": "conceive",
      "meaning": "（を）思いつく；と想像する；（を）妊娠する",
      "section": 16
    },
    {
      "no": 1541,
      "word": "entrepreneur",
      "meaning": "起業家，事業家",
      "section": 16
    },
    {
      "no": 1542,
      "word": "stake",
      "meaning": "利害関係；〔通例～s〕賭け金；杭",
      "section": 16
    },
    {
      "no": 1543,
      "word": "surplus",
      "meaning": "余剰（⇔ shortage 不足），過剰；黒字",
      "section": 16
    },
    {
      "no": 1544,
      "word": "inflation",
      "meaning": "インフレ（ーション）；（物価の）高騰",
      "section": 16
    },
    {
      "no": 1545,
      "word": "sweatshop",
      "meaning": "搾取工場",
      "section": 16
    },
    {
      "no": 1546,
      "word": "clash",
      "meaning": "衝突；対立；かち合うこと；ガチャンという音",
      "section": 16
    },
    {
      "no": 1547,
      "word": "sociology",
      "meaning": "社会学",
      "section": 16
    },
    {
      "no": 1548,
      "word": "ideology",
      "meaning": "イデオロギー，思想傾向",
      "section": 16
    },
    {
      "no": 1549,
      "word": "margin",
      "meaning": "余白；差；利ざや",
      "section": 16
    },
    {
      "no": 1550,
      "word": "realm",
      "meaning": "領域；領土",
      "section": 16
    },
    {
      "no": 1551,
      "word": "domain",
      "meaning": "分野；領域；ドメイン（＝ domain name）",
      "section": 16
    },
    {
      "no": 1552,
      "word": "algorithm",
      "meaning": "アルゴリズム；問題解決の手順",
      "section": 16
    },
    {
      "no": 1553,
      "word": "prairie",
      "meaning": "大草原",
      "section": 16
    },
    {
      "no": 1554,
      "word": "frontier",
      "meaning": "〔通例the ～s〕最先端；〔the ～〕 【米】辺境地；国境",
      "section": 16
    },
    {
      "no": 1555,
      "word": "bullet",
      "meaning": "銃弾",
      "section": 16
    },
    {
      "no": 1556,
      "word": "shield",
      "meaning": "盾，防御物",
      "section": 16
    },
    {
      "no": 1557,
      "word": "despair",
      "meaning": "絶望",
      "section": 16
    },
    {
      "no": 1558,
      "word": "radiation",
      "meaning": "放射能，放射線",
      "section": 16
    },
    {
      "no": 1559,
      "word": "placebo",
      "meaning": "偽薬，プラシーボ；気休め",
      "section": 16
    },
    {
      "no": 1560,
      "word": "nursery",
      "meaning": "託児所；苗床",
      "section": 16
    },
    {
      "no": 1561,
      "word": "spouse",
      "meaning": "配偶者",
      "section": 16
    },
    {
      "no": 1562,
      "word": "makeup",
      "meaning": "化粧；化粧品；構成；性質",
      "section": 16
    },
    {
      "no": 1563,
      "word": "mummy",
      "meaning": "ミイラ；【英】ママ，お母さん（＝ 【米】mommy）",
      "section": 16
    },
    {
      "no": 1564,
      "word": "flesh",
      "meaning": "（人・動物の）肉；果肉",
      "section": 16
    },
    {
      "no": 1565,
      "word": "limb",
      "meaning": "手足",
      "section": 16
    },
    {
      "no": 1566,
      "word": "odor",
      "meaning": "におい；気配",
      "section": 16
    },
    {
      "no": 1567,
      "word": "laundry",
      "meaning": "洗濯（物）；クリーニング店",
      "section": 16
    },
    {
      "no": 1568,
      "word": "tide",
      "meaning": "潮（の干満）；動向",
      "section": 16
    },
    {
      "no": 1569,
      "word": "questionnaire",
      "meaning": "アンケート",
      "section": 16
    },
    {
      "no": 1570,
      "word": "nonsense",
      "meaning": "ばかげた物［話，考え］；無意味な言葉",
      "section": 16
    },
    {
      "no": 1571,
      "word": "revenge",
      "meaning": "復讐",
      "section": 16
    },
    {
      "no": 1572,
      "word": "intellect",
      "meaning": "知性；〔the ～（s）〕知識人",
      "section": 16
    },
    {
      "no": 1573,
      "word": "hospitality",
      "meaning": "親切なもてなし，歓待；受容性",
      "section": 16
    },
    {
      "no": 1574,
      "word": "librarian",
      "meaning": "司書，図書館員",
      "section": 16
    },
    {
      "no": 1575,
      "word": "manuscript",
      "meaning": "（手書きの）原稿；写本",
      "section": 16
    },
    {
      "no": 1576,
      "word": "obsession",
      "meaning": "（考えなどに）取りつかれること；妄想；強迫観念",
      "section": 16
    },
    {
      "no": 1577,
      "word": "hygiene",
      "meaning": "衛生（状態）；健康法",
      "section": 16
    },
    {
      "no": 1578,
      "word": "paradigm",
      "meaning": "理論的枠組み，パラダイム；模範",
      "section": 16
    },
    {
      "no": 1579,
      "word": "legitimate",
      "meaning": "合法的な；妥当な",
      "section": 16
    },
    {
      "no": 1580,
      "word": "authentic",
      "meaning": "本物の；信頼できる",
      "section": 16
    },
    {
      "no": 1581,
      "word": "empirical",
      "meaning": "経験的な；経験主義の",
      "section": 16
    },
    {
      "no": 1582,
      "word": "immense",
      "meaning": "膨大な",
      "section": 16
    },
    {
      "no": 1583,
      "word": "absurd",
      "meaning": "ばかげた；不合理な",
      "section": 16
    },
    {
      "no": 1584,
      "word": "weird",
      "meaning": "異様な（≒ bizarre），奇妙な",
      "section": 16
    },
    {
      "no": 1585,
      "word": "accidental",
      "meaning": "偶然の；過失による",
      "section": 16
    },
    {
      "no": 1586,
      "word": "uneasy",
      "meaning": "不安な；落ち着かない；ぎこちない",
      "section": 16
    },
    {
      "no": 1587,
      "word": "jealous",
      "meaning": "嫉妬深い；用心深い",
      "section": 16
    },
    {
      "no": 1588,
      "word": "feminine",
      "meaning": "女らしい（⇔ masculine ⇒ 1681）",
      "section": 16
    },
    {
      "no": 1589,
      "word": "swift",
      "meaning": "素早い",
      "section": 16
    },
    {
      "no": 1590,
      "word": "hollow",
      "meaning": "空洞の；空虚な；うわべだけの",
      "section": 16
    },
    {
      "no": 1591,
      "word": "crude",
      "meaning": "大まかな；粗野な；未精製の",
      "section": 16
    },
    {
      "no": 1592,
      "word": "sore",
      "meaning": "痛い；腹が立って",
      "section": 16
    },
    {
      "no": 1593,
      "word": "pessimistic",
      "meaning": "悲観的な（⇔ optimistic ⇒ 882）",
      "section": 16
    },
    {
      "no": 1594,
      "word": "vain",
      "meaning": "無駄な；うぬぼれた",
      "section": 16
    },
    {
      "no": 1595,
      "word": "susceptible",
      "meaning": "（～の）影響を受けやすい（to）；感染しやすい",
      "section": 16
    },
    {
      "no": 1596,
      "word": "edible",
      "meaning": "食用の，食べられる",
      "section": 16
    },
    {
      "no": 1597,
      "word": "sheer",
      "meaning": "純然たる，真の；すごい；（布が）薄地の",
      "section": 16
    },
    {
      "no": 1598,
      "word": "explicit",
      "meaning": "明白な（⇔ implicit ⇒ 1795）；率直な",
      "section": 16
    },
    {
      "no": 1599,
      "word": "prone",
      "meaning": "（～に）なりやすい（to）；（...する）傾向がある（to do）",
      "section": 16
    },
    {
      "no": 1600,
      "word": "affluent",
      "meaning": "裕福な；豊富な",
      "section": 16
    },
    {
      "no": 1601,
      "word": "collaborate",
      "meaning": "共同して働く；（～に）協力する（with）",
      "section": 17
    },
    {
      "no": 1602,
      "word": "exert",
      "meaning": "を及ぼす；（力など）を行使する",
      "section": 17
    },
    {
      "no": 1603,
      "word": "excel",
      "meaning": "（～で）秀でている（in / at）；に勝る",
      "section": 17
    },
    {
      "no": 1604,
      "word": "prosper",
      "meaning": "栄える，成功する；繁殖する",
      "section": 17
    },
    {
      "no": 1605,
      "word": "surge",
      "meaning": "殺到する；（感情が）こみ上げる；急騰する",
      "section": 17
    },
    {
      "no": 1606,
      "word": "intervene",
      "meaning": "（～に）介入する（in）；介在する",
      "section": 17
    },
    {
      "no": 1607,
      "word": "insert",
      "meaning": "を挿入する",
      "section": 17
    },
    {
      "no": 1608,
      "word": "overtake",
      "meaning": "を追い抜く；に追いつく（≒ catch up with）；（災難・強い感情などが）を襲う",
      "section": 17
    },
    {
      "no": 1609,
      "word": "snap",
      "meaning": "をパチンと鳴らす；をポキッと折る；ポキッと折れる；パチンと音を立てる",
      "section": 17
    },
    {
      "no": 1610,
      "word": "carve",
      "meaning": "を彫る；を切り開く；（肉）を切り分ける",
      "section": 17
    },
    {
      "no": 1611,
      "word": "addict",
      "meaning": "〔受身形で〕（～の）中毒になる（to）；（～に）凝る",
      "section": 17
    },
    {
      "no": 1612,
      "word": "condemn",
      "meaning": "を非難する；〔受身形で〕（～の刑を）宣告される（to）",
      "section": 17
    },
    {
      "no": 1613,
      "word": "convict",
      "meaning": "に有罪を宣告する",
      "section": 17
    },
    {
      "no": 1614,
      "word": "dictate",
      "meaning": "を指図する；を書き取らせる；を規定する",
      "section": 17
    },
    {
      "no": 1615,
      "word": "prescribe",
      "meaning": "（薬など）を処方する；を規定する",
      "section": 17
    },
    {
      "no": 1616,
      "word": "inhibit",
      "meaning": "を抑制する；を妨げる",
      "section": 17
    },
    {
      "no": 1617,
      "word": "stray",
      "meaning": "はぐれる，（道に）迷う",
      "section": 17
    },
    {
      "no": 1618,
      "word": "roam",
      "meaning": "（を）歩き回る；放浪する",
      "section": 17
    },
    {
      "no": 1619,
      "word": "enclose",
      "meaning": "を同封する；を取り囲む",
      "section": 17
    },
    {
      "no": 1620,
      "word": "execute",
      "meaning": "を実行する；を処刑する",
      "section": 17
    },
    {
      "no": 1621,
      "word": "coincide",
      "meaning": "同時に起こる；一致する",
      "section": 17
    },
    {
      "no": 1622,
      "word": "lag",
      "meaning": "遅れる；徐々に弱まる",
      "section": 17
    },
    {
      "no": 1623,
      "word": "cling",
      "meaning": "しがみつく；くっつく",
      "section": 17
    },
    {
      "no": 1624,
      "word": "erase",
      "meaning": "を消す",
      "section": 17
    },
    {
      "no": 1625,
      "word": "grind",
      "meaning": "（穀物など）をひく",
      "section": 17
    },
    {
      "no": 1626,
      "word": "knit",
      "meaning": "を編む；を結合する；編み物をする",
      "section": 17
    },
    {
      "no": 1627,
      "word": "inquire",
      "meaning": "（を）尋ねる",
      "section": 17
    },
    {
      "no": 1628,
      "word": "betray",
      "meaning": "をうっかり表す；を裏切る",
      "section": 17
    },
    {
      "no": 1629,
      "word": "leak",
      "meaning": "漏れる；を漏らす",
      "section": 17
    },
    {
      "no": 1630,
      "word": "smash",
      "meaning": "を粉砕する；を強打する；粉々に壊れる；激突する",
      "section": 17
    },
    {
      "no": 1631,
      "word": "bounce",
      "meaning": "跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される",
      "section": 17
    },
    {
      "no": 1632,
      "word": "sprawl",
      "meaning": "（都市などが）不規則に広がる；だらしなく手足を伸ばす",
      "section": 17
    },
    {
      "no": 1633,
      "word": "converse",
      "meaning": "（～と）会話をする（with）",
      "section": 17
    },
    {
      "no": 1634,
      "word": "recite",
      "meaning": "を暗唱する；を詳述する",
      "section": 17
    },
    {
      "no": 1635,
      "word": "disregard",
      "meaning": "を無視する；を軽視する",
      "section": 17
    },
    {
      "no": 1636,
      "word": "frown",
      "meaning": "眉をひそめる",
      "section": 17
    },
    {
      "no": 1637,
      "word": "evoke",
      "meaning": "を呼び起こす",
      "section": 17
    },
    {
      "no": 1638,
      "word": "pledge",
      "meaning": "を誓う，約束する；を与えることを約束する",
      "section": 17
    },
    {
      "no": 1639,
      "word": "aspire",
      "meaning": "（～を）熱望する（to）",
      "section": 17
    },
    {
      "no": 1640,
      "word": "contemplate",
      "meaning": "（を）熟考する；を予想する",
      "section": 17
    },
    {
      "no": 1641,
      "word": "grace",
      "meaning": "優美，優雅；分別；（神の）恩寵",
      "section": 17
    },
    {
      "no": 1642,
      "word": "enlightenment",
      "meaning": "啓蒙，啓発",
      "section": 17
    },
    {
      "no": 1643,
      "word": "commerce",
      "meaning": "商業；貿易",
      "section": 17
    },
    {
      "no": 1644,
      "word": "draft",
      "meaning": "下書き；為替手形；隙間風",
      "section": 17
    },
    {
      "no": 1645,
      "word": "barrel",
      "meaning": "バレル（液量の単位）；たる",
      "section": 17
    },
    {
      "no": 1646,
      "word": "timber",
      "meaning": "【英】 木材（≒ 【米】lumber）；樹木",
      "section": 17
    },
    {
      "no": 1647,
      "word": "garment",
      "meaning": "衣服",
      "section": 17
    },
    {
      "no": 1648,
      "word": "thread",
      "meaning": "糸；（議論などの）筋道",
      "section": 17
    },
    {
      "no": 1649,
      "word": "cabinet",
      "meaning": "〔しばしばthe C-〕内閣；戸棚",
      "section": 17
    },
    {
      "no": 1650,
      "word": "bureau",
      "meaning": "（官庁の）局；事務局；案内所",
      "section": 17
    },
    {
      "no": 1651,
      "word": "autonomy",
      "meaning": "（個人の）自律；自治（権）；自治体",
      "section": 17
    },
    {
      "no": 1652,
      "word": "toll",
      "meaning": "損害（の程度）；死傷者数；通行料",
      "section": 17
    },
    {
      "no": 1653,
      "word": "discourse",
      "meaning": "話し合い，会話；講演；論説",
      "section": 17
    },
    {
      "no": 1654,
      "word": "superstition",
      "meaning": "迷信",
      "section": 17
    },
    {
      "no": 1655,
      "word": "glimpse",
      "meaning": "ちらりと見えること",
      "section": 17
    },
    {
      "no": 1656,
      "word": "arithmetic",
      "meaning": "計算；算数",
      "section": 17
    },
    {
      "no": 1657,
      "word": "glossary",
      "meaning": "用語小辞典；用語集",
      "section": 17
    },
    {
      "no": 1658,
      "word": "archive",
      "meaning": "〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ",
      "section": 17
    },
    {
      "no": 1659,
      "word": "legacy",
      "meaning": "遺産",
      "section": 17
    },
    {
      "no": 1660,
      "word": "anthropology",
      "meaning": "人類学",
      "section": 17
    },
    {
      "no": 1661,
      "word": "rage",
      "meaning": "激怒；猛威",
      "section": 17
    },
    {
      "no": 1662,
      "word": "sorrow",
      "meaning": "悲しみ",
      "section": 17
    },
    {
      "no": 1663,
      "word": "psychiatrist",
      "meaning": "精神科医",
      "section": 17
    },
    {
      "no": 1664,
      "word": "ward",
      "meaning": "行政区；病棟",
      "section": 17
    },
    {
      "no": 1665,
      "word": "stall",
      "meaning": "露店；エンスト；失速",
      "section": 17
    },
    {
      "no": 1666,
      "word": "flame",
      "meaning": "炎；情熱",
      "section": 17
    },
    {
      "no": 1667,
      "word": "moisture",
      "meaning": "水分；湿気",
      "section": 17
    },
    {
      "no": 1668,
      "word": "irony",
      "meaning": "皮肉",
      "section": 17
    },
    {
      "no": 1669,
      "word": "warrior",
      "meaning": "戦士",
      "section": 17
    },
    {
      "no": 1670,
      "word": "astronomy",
      "meaning": "天文学",
      "section": 17
    },
    {
      "no": 1671,
      "word": "probe",
      "meaning": "（無人）宇宙探査機；（～の）精査（into）；探り針",
      "section": 17
    },
    {
      "no": 1672,
      "word": "altitude",
      "meaning": "高度，標高",
      "section": 17
    },
    {
      "no": 1673,
      "word": "tumor",
      "meaning": "腫瘍；腫れ物",
      "section": 17
    },
    {
      "no": 1674,
      "word": "defect",
      "meaning": "欠陥；不足",
      "section": 17
    },
    {
      "no": 1675,
      "word": "sanitation",
      "meaning": "公衆衛生（学）；下水［衛生］設備",
      "section": 17
    },
    {
      "no": 1676,
      "word": "longevity",
      "meaning": "長寿；寿命；長年勤続",
      "section": 17
    },
    {
      "no": 1677,
      "word": "scope",
      "meaning": "（活動・能力などの）範囲；余地",
      "section": 17
    },
    {
      "no": 1678,
      "word": "sentiment",
      "meaning": "感情；感想；感傷",
      "section": 17
    },
    {
      "no": 1679,
      "word": "plausible",
      "meaning": "もっともらしい",
      "section": 17
    },
    {
      "no": 1680,
      "word": "vigorous",
      "meaning": "精力的な；激しい；活力のある",
      "section": 17
    },
    {
      "no": 1681,
      "word": "masculine",
      "meaning": "男らしい（⇔ feminine ⇒ 1588）",
      "section": 17
    },
    {
      "no": 1682,
      "word": "rigid",
      "meaning": "厳しい；硬直した",
      "section": 17
    },
    {
      "no": 1683,
      "word": "adverse",
      "meaning": "不都合な；逆の",
      "section": 17
    },
    {
      "no": 1684,
      "word": "coherent",
      "meaning": "一貫した，筋の通った；結束した",
      "section": 17
    },
    {
      "no": 1685,
      "word": "literal",
      "meaning": "文字どおりの；逐語的な；散文的な",
      "section": 17
    },
    {
      "no": 1686,
      "word": "arbitrary",
      "meaning": "恣意的な；独断的な",
      "section": 17
    },
    {
      "no": 1687,
      "word": "anonymous",
      "meaning": "匿名の",
      "section": 17
    },
    {
      "no": 1688,
      "word": "antique",
      "meaning": "骨董の，アンティークの；古風な",
      "section": 17
    },
    {
      "no": 1689,
      "word": "eternal",
      "meaning": "永遠の；不変の",
      "section": 17
    },
    {
      "no": 1690,
      "word": "intermediate",
      "meaning": "中級の；中間の",
      "section": 17
    },
    {
      "no": 1691,
      "word": "subordinate",
      "meaning": "（～より）下位の（to）；副次的な",
      "section": 17
    },
    {
      "no": 1692,
      "word": "gloomy",
      "meaning": "陰気な；薄暗い；悲観的な",
      "section": 17
    },
    {
      "no": 1693,
      "word": "thermal",
      "meaning": "熱の，熱による；保温用の",
      "section": 17
    },
    {
      "no": 1694,
      "word": "faint",
      "meaning": "かすかな；めまいがする；弱々しい",
      "section": 17
    },
    {
      "no": 1695,
      "word": "naive",
      "meaning": "お人よしの，愚直な；純朴な",
      "section": 17
    },
    {
      "no": 1696,
      "word": "apt",
      "meaning": "（...する）傾向がある（to do）；適切な；利発な",
      "section": 17
    },
    {
      "no": 1697,
      "word": "arrogant",
      "meaning": "横柄な，傲慢な",
      "section": 17
    },
    {
      "no": 1698,
      "word": "extrovert",
      "meaning": "外向的な；社交的な",
      "section": 17
    },
    {
      "no": 1699,
      "word": "conspicuous",
      "meaning": "目立つ",
      "section": 17
    },
    {
      "no": 1700,
      "word": "intact",
      "meaning": "損なわれていない，手つかずの",
      "section": 17
    },
    {
      "no": 1701,
      "word": "embody",
      "meaning": "を具現する；を包含する",
      "section": 18
    },
    {
      "no": 1702,
      "word": "illuminate",
      "meaning": "を照らす；を解明する",
      "section": 18
    },
    {
      "no": 1703,
      "word": "console",
      "meaning": "を慰める",
      "section": 18
    },
    {
      "no": 1704,
      "word": "verify",
      "meaning": "の正しさを証明［確認］する",
      "section": 18
    },
    {
      "no": 1705,
      "word": "disclose",
      "meaning": "を公表する，暴く",
      "section": 18
    },
    {
      "no": 1706,
      "word": "stack",
      "meaning": "を積む，積み重ねる；〔～ upで〕（車が）渋滞する",
      "section": 18
    },
    {
      "no": 1707,
      "word": "rotate",
      "meaning": "回転する；循環する；を回転させる",
      "section": 18
    },
    {
      "no": 1708,
      "word": "constrain",
      "meaning": "に（...することを）強いる（to do）；を抑える",
      "section": 18
    },
    {
      "no": 1709,
      "word": "hinder",
      "meaning": "を妨げる",
      "section": 18
    },
    {
      "no": 1710,
      "word": "withstand",
      "meaning": "に耐える",
      "section": 18
    },
    {
      "no": 1711,
      "word": "tweet",
      "meaning": "（を）ツイートする，つぶやく",
      "section": 18
    },
    {
      "no": 1712,
      "word": "sneeze",
      "meaning": "くしゃみをする",
      "section": 18
    },
    {
      "no": 1713,
      "word": "erupt",
      "meaning": "（火山が）噴火する；勃発する",
      "section": 18
    },
    {
      "no": 1714,
      "word": "blur",
      "meaning": "をぼかす；を曇らせる；をあいまいにする",
      "section": 18
    },
    {
      "no": 1715,
      "word": "overlap",
      "meaning": "（一部）重なる；（と）重複［共通］する",
      "section": 18
    },
    {
      "no": 1716,
      "word": "embed",
      "meaning": "〔通例受身形で〕埋め込まれる，はめ込まれる",
      "section": 18
    },
    {
      "no": 1717,
      "word": "displace",
      "meaning": "に取って代わる（≒ replace）；を移動させる",
      "section": 18
    },
    {
      "no": 1718,
      "word": "render",
      "meaning": "を（ある状態に）する；（援助など）を与える",
      "section": 18
    },
    {
      "no": 1719,
      "word": "plunge",
      "meaning": "（～に）（を）突っ込む（into）；没頭する；陥る",
      "section": 18
    },
    {
      "no": 1720,
      "word": "surrender",
      "meaning": "を放棄する，引き渡す；（～に）屈する（to）",
      "section": 18
    },
    {
      "no": 1721,
      "word": "plug",
      "meaning": "〔plug inで〕のプラグを電源に差し込む；を（～で）ふさぐ（with）",
      "section": 18
    },
    {
      "no": 1722,
      "word": "suck",
      "meaning": "（を）吸う；（を）しゃぶる",
      "section": 18
    },
    {
      "no": 1723,
      "word": "mock",
      "meaning": "をばかにする（≒ make fun of）；のまねをしてからかう",
      "section": 18
    },
    {
      "no": 1724,
      "word": "tease",
      "meaning": "（を）からかう；をいじめる",
      "section": 18
    },
    {
      "no": 1725,
      "word": "soothe",
      "meaning": "をなだめる；を和らげる",
      "section": 18
    },
    {
      "no": 1726,
      "word": "stain",
      "meaning": "を汚す；に着色する",
      "section": 18
    },
    {
      "no": 1727,
      "word": "shun",
      "meaning": "を避ける",
      "section": 18
    },
    {
      "no": 1728,
      "word": "stumble",
      "meaning": "よろけながら歩く；（～に）つまずく（on / over）",
      "section": 18
    },
    {
      "no": 1729,
      "word": "flush",
      "meaning": "を紅潮させる；を水で流す；紅潮する",
      "section": 18
    },
    {
      "no": 1730,
      "word": "impair",
      "meaning": "を損なう",
      "section": 18
    },
    {
      "no": 1731,
      "word": "presume",
      "meaning": "と思う；と推定する；を前提とする",
      "section": 18
    },
    {
      "no": 1732,
      "word": "contend",
      "meaning": "と主張する；競う",
      "section": 18
    },
    {
      "no": 1733,
      "word": "roar",
      "meaning": "うなる，ほえる；大笑いする",
      "section": 18
    },
    {
      "no": 1734,
      "word": "haunt",
      "meaning": "（記憶・考えなどが）につきまとう；（幽霊などが）に出る；によく行く",
      "section": 18
    },
    {
      "no": 1735,
      "word": "divert",
      "meaning": "（注意など）をそらす；を迂回させる；（資金など）を転用する",
      "section": 18
    },
    {
      "no": 1736,
      "word": "await",
      "meaning": "を待つ（≒ wait for）",
      "section": 18
    },
    {
      "no": 1737,
      "word": "fetch",
      "meaning": "を（行って）持って［連れて］くる",
      "section": 18
    },
    {
      "no": 1738,
      "word": "unify",
      "meaning": "を統合［統一］する；統一される",
      "section": 18
    },
    {
      "no": 1739,
      "word": "inspect",
      "meaning": "を点検する；を視察する",
      "section": 18
    },
    {
      "no": 1740,
      "word": "entail",
      "meaning": "を伴う，引き起こす；（...すること）を含む（doing）",
      "section": 18
    },
    {
      "no": 1741,
      "word": "tactics",
      "meaning": "作戦，方策；戦術，戦法",
      "section": 18
    },
    {
      "no": 1742,
      "word": "feat",
      "meaning": "偉業，功績；妙技",
      "section": 18
    },
    {
      "no": 1743,
      "word": "prestige",
      "meaning": "名声；〔形容詞的に〕名声のある",
      "section": 18
    },
    {
      "no": 1744,
      "word": "analogy",
      "meaning": "類推；類似",
      "section": 18
    },
    {
      "no": 1745,
      "word": "conscience",
      "meaning": "良心；分別",
      "section": 18
    },
    {
      "no": 1746,
      "word": "textile",
      "meaning": "織物；繊維（産業）",
      "section": 18
    },
    {
      "no": 1747,
      "word": "deficit",
      "meaning": "赤字，不足；欠陥",
      "section": 18
    },
    {
      "no": 1748,
      "word": "plague",
      "meaning": "疫病；（害虫などの）異常発生",
      "section": 18
    },
    {
      "no": 1749,
      "word": "hazard",
      "meaning": "危険（要素）；偶然",
      "section": 18
    },
    {
      "no": 1750,
      "word": "metabolism",
      "meaning": "（新陳）代謝，代謝作用",
      "section": 18
    },
    {
      "no": 1751,
      "word": "paralysis",
      "meaning": "麻痺；〔比喩的に〕麻痺（状態）",
      "section": 18
    },
    {
      "no": 1752,
      "word": "grid",
      "meaning": "（電気などの）供給網；格子（模様）；碁盤目",
      "section": 18
    },
    {
      "no": 1753,
      "word": "carriage",
      "meaning": "馬車；車両（＝ 【米】car）；立ち居振舞い；【英】輸送",
      "section": 18
    },
    {
      "no": 1754,
      "word": "friction",
      "meaning": "不和；摩擦",
      "section": 18
    },
    {
      "no": 1755,
      "word": "rebel",
      "meaning": "反逆者",
      "section": 18
    },
    {
      "no": 1756,
      "word": "regime",
      "meaning": "政権，政体；体制",
      "section": 18
    },
    {
      "no": 1757,
      "word": "monopoly",
      "meaning": "独占（権）",
      "section": 18
    },
    {
      "no": 1758,
      "word": "staple",
      "meaning": "必需食品；主要産物",
      "section": 18
    },
    {
      "no": 1759,
      "word": "merchandise",
      "meaning": "商品",
      "section": 18
    },
    {
      "no": 1760,
      "word": "vendor",
      "meaning": "物売り，行商人；自動販売機",
      "section": 18
    },
    {
      "no": 1761,
      "word": "supervisor",
      "meaning": "監督者；指導教員",
      "section": 18
    },
    {
      "no": 1762,
      "word": "predecessor",
      "meaning": "前任者（⇔ successor 後継者）；前のもの",
      "section": 18
    },
    {
      "no": 1763,
      "word": "personnel",
      "meaning": "〔集合的に〕職員，社員",
      "section": 18
    },
    {
      "no": 1764,
      "word": "vessel",
      "meaning": "船舶；容器；（体液が通る）脈管",
      "section": 18
    },
    {
      "no": 1765,
      "word": "liver",
      "meaning": "肝臓",
      "section": 18
    },
    {
      "no": 1766,
      "word": "duration",
      "meaning": "（時間の）継続，持続（時間）",
      "section": 18
    },
    {
      "no": 1767,
      "word": "certificate",
      "meaning": "証明書；免許状",
      "section": 18
    },
    {
      "no": 1768,
      "word": "geometry",
      "meaning": "幾何学",
      "section": 18
    },
    {
      "no": 1769,
      "word": "symmetry",
      "meaning": "（左右）対称（⇔ asymmetry 非対称）；調和",
      "section": 18
    },
    {
      "no": 1770,
      "word": "biography",
      "meaning": "伝記",
      "section": 18
    },
    {
      "no": 1771,
      "word": "masterpiece",
      "meaning": "傑作",
      "section": 18
    },
    {
      "no": 1772,
      "word": "rhyme",
      "meaning": "押韻詩；韻；〔通例～s〕詩歌",
      "section": 18
    },
    {
      "no": 1773,
      "word": "premium",
      "meaning": "保険料；プレミア；景品",
      "section": 18
    },
    {
      "no": 1774,
      "word": "breakdown",
      "meaning": "崩壊；（神経）衰弱；故障；内訳",
      "section": 18
    },
    {
      "no": 1775,
      "word": "courtesy",
      "meaning": "礼儀正しさ；好意；優遇",
      "section": 18
    },
    {
      "no": 1776,
      "word": "protocol",
      "meaning": "（条約）議定書；外交儀礼；プロトコル",
      "section": 18
    },
    {
      "no": 1777,
      "word": "specimen",
      "meaning": "標本；実例",
      "section": 18
    },
    {
      "no": 1778,
      "word": "thesis",
      "meaning": "論文；命題，テーゼ",
      "section": 18
    },
    {
      "no": 1779,
      "word": "eligible",
      "meaning": "適格の，資格のある；（結婚相手として）望ましい",
      "section": 18
    },
    {
      "no": 1780,
      "word": "intrinsic",
      "meaning": "固有の，本質的な（⇔ extrinsic 非本質的な）",
      "section": 18
    },
    {
      "no": 1781,
      "word": "diligent",
      "meaning": "勤勉な；入念な",
      "section": 18
    },
    {
      "no": 1782,
      "word": "vocational",
      "meaning": "職業の，職業訓練の（ための）",
      "section": 18
    },
    {
      "no": 1783,
      "word": "bankrupt",
      "meaning": "破産宣告を受けた；破綻している",
      "section": 18
    },
    {
      "no": 1784,
      "word": "stern",
      "meaning": "厳しい；いかめしい",
      "section": 18
    },
    {
      "no": 1785,
      "word": "stubborn",
      "meaning": "頑固な，強情な（≒ obstinate）；手に負えない",
      "section": 18
    },
    {
      "no": 1786,
      "word": "maternal",
      "meaning": "母の，母親らしい（⇔ paternal 父の）；妊婦の",
      "section": 18
    },
    {
      "no": 1787,
      "word": "fertile",
      "meaning": "肥沃な（⇔ barren 不毛の）；多産の",
      "section": 18
    },
    {
      "no": 1788,
      "word": "ripe",
      "meaning": "熟した；成熟した",
      "section": 18
    },
    {
      "no": 1789,
      "word": "stiff",
      "meaning": "硬直した，凝った；堅い",
      "section": 18
    },
    {
      "no": 1790,
      "word": "obsolete",
      "meaning": "廃れた，使われなくなった；古くなった",
      "section": 18
    },
    {
      "no": 1791,
      "word": "vacant",
      "meaning": "空いている",
      "section": 18
    },
    {
      "no": 1792,
      "word": "acoustic",
      "meaning": "音響の；聴覚の；（楽器が）アコースティックの",
      "section": 18
    },
    {
      "no": 1793,
      "word": "preliminary",
      "meaning": "予備の，準備の",
      "section": 18
    },
    {
      "no": 1794,
      "word": "approximate",
      "meaning": "おおよその",
      "section": 18
    },
    {
      "no": 1795,
      "word": "implicit",
      "meaning": "暗黙の（⇔ explicit ⇒ 1598）；内在する",
      "section": 18
    },
    {
      "no": 1796,
      "word": "punctual",
      "meaning": "時間を守る",
      "section": 18
    },
    {
      "no": 1797,
      "word": "compatible",
      "meaning": "矛盾しない；互換性のある；気が合う",
      "section": 18
    },
    {
      "no": 1798,
      "word": "ample",
      "meaning": "十分すぎるほどの；広い",
      "section": 18
    },
    {
      "no": 1799,
      "word": "pervasive",
      "meaning": "隅々に広がった；浸透する；充満する",
      "section": 18
    },
    {
      "no": 1800,
      "word": "ubiquitous",
      "meaning": "至る所にある",
      "section": 18
    },
    {
      "no": 1801,
      "word": "deduce",
      "meaning": "を推測する，演繹する",
      "section": 19
    },
    {
      "no": 1802,
      "word": "simulate",
      "meaning": "を模擬実験する；を装う；をまねる",
      "section": 19
    },
    {
      "no": 1803,
      "word": "merge",
      "meaning": "（を）合併する；を融合させる；溶け込む",
      "section": 19
    },
    {
      "no": 1804,
      "word": "penetrate",
      "meaning": "（に）浸透する；（に）進出する；（を）貫く；（を）見抜く",
      "section": 19
    },
    {
      "no": 1805,
      "word": "cater",
      "meaning": "（の）料理をまかなう；（要望などに）応える",
      "section": 19
    },
    {
      "no": 1806,
      "word": "assault",
      "meaning": "に暴行する；を攻撃する",
      "section": 19
    },
    {
      "no": 1807,
      "word": "torture",
      "meaning": "を拷問にかける；を苦しめる",
      "section": 19
    },
    {
      "no": 1808,
      "word": "bleed",
      "meaning": "出血する",
      "section": 19
    },
    {
      "no": 1809,
      "word": "erect",
      "meaning": "を建てる；を直立させる",
      "section": 19
    },
    {
      "no": 1810,
      "word": "cherish",
      "meaning": "を大切にする；を心に抱く",
      "section": 19
    },
    {
      "no": 1811,
      "word": "arouse",
      "meaning": "（感情など）を引き起こす；を目覚めさせる",
      "section": 19
    },
    {
      "no": 1812,
      "word": "doom",
      "meaning": "〔通例受身形で〕運命にある",
      "section": 19
    },
    {
      "no": 1813,
      "word": "mourn",
      "meaning": "（を）悼む（≒ grieve）；（を）嘆く",
      "section": 19
    },
    {
      "no": 1814,
      "word": "dread",
      "meaning": "をひどく恐れる",
      "section": 19
    },
    {
      "no": 1815,
      "word": "nourish",
      "meaning": "に栄養を与える；をはぐくむ",
      "section": 19
    },
    {
      "no": 1816,
      "word": "inject",
      "meaning": "（人）に注射する，を注入する；を導入する",
      "section": 19
    },
    {
      "no": 1817,
      "word": "swear",
      "meaning": "（～を）ののしる（at）；（を）誓う（≒ vow）",
      "section": 19
    },
    {
      "no": 1818,
      "word": "bid",
      "meaning": "（～に）の値をつける（for ⇒ on）；（挨拶）を述べる",
      "section": 19
    },
    {
      "no": 1819,
      "word": "corrupt",
      "meaning": "を堕落させる；を買収する；堕落する",
      "section": 19
    },
    {
      "no": 1820,
      "word": "preoccupy",
      "meaning": "の心を奪う，を夢中にさせる",
      "section": 19
    },
    {
      "no": 1821,
      "word": "browse",
      "meaning": "（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く",
      "section": 19
    },
    {
      "no": 1822,
      "word": "compile",
      "meaning": "を編集する；（資料など）をまとめる",
      "section": 19
    },
    {
      "no": 1823,
      "word": "allocate",
      "meaning": "を割り当てる，分配する",
      "section": 19
    },
    {
      "no": 1824,
      "word": "offset",
      "meaning": "を相殺する，埋め合わせる；をオフセット印刷にする",
      "section": 19
    },
    {
      "no": 1825,
      "word": "restrain",
      "meaning": "を制止する；を規制する",
      "section": 19
    },
    {
      "no": 1826,
      "word": "comply",
      "meaning": "従う，応じる",
      "section": 19
    },
    {
      "no": 1827,
      "word": "expire",
      "meaning": "期限が切れる",
      "section": 19
    },
    {
      "no": 1828,
      "word": "embark",
      "meaning": "（～に）乗り出す（on）；乗船［搭乗］する",
      "section": 19
    },
    {
      "no": 1829,
      "word": "flap",
      "meaning": "パタパタ動く；羽ばたく（≒ flutter）；をパタパタ動かす",
      "section": 19
    },
    {
      "no": 1830,
      "word": "furnish",
      "meaning": "に（～を）備えつける（with）",
      "section": 19
    },
    {
      "no": 1831,
      "word": "forge",
      "meaning": "を偽造する；（関係など）を築く；を鍛造する",
      "section": 19
    },
    {
      "no": 1832,
      "word": "thrust",
      "meaning": "を押しつける；を突き刺す；押し進む",
      "section": 19
    },
    {
      "no": 1833,
      "word": "dispatch",
      "meaning": "を派遣する；を発送する；を処理する",
      "section": 19
    },
    {
      "no": 1834,
      "word": "resent",
      "meaning": "に憤慨する",
      "section": 19
    },
    {
      "no": 1835,
      "word": "reconcile",
      "meaning": "を（～と）一致させる（with）；を和解させる",
      "section": 19
    },
    {
      "no": 1836,
      "word": "allege",
      "meaning": "を主張する",
      "section": 19
    },
    {
      "no": 1837,
      "word": "oppress",
      "meaning": "を抑圧［迫害］する；を悩ませる",
      "section": 19
    },
    {
      "no": 1838,
      "word": "expel",
      "meaning": "を追放する；を吐き出す",
      "section": 19
    },
    {
      "no": 1839,
      "word": "ascend",
      "meaning": "（を）上がる（⇔ descend ⇒ 1337）",
      "section": 19
    },
    {
      "no": 1840,
      "word": "commence",
      "meaning": "始まる；を開始する；...し始める（to do / doing）⇒ commence work 仕事［作業］を始める",
      "section": 19
    },
    {
      "no": 1841,
      "word": "advent",
      "meaning": "〔the ～〕出現，到来",
      "section": 19
    },
    {
      "no": 1842,
      "word": "reign",
      "meaning": "治世；統治",
      "section": 19
    },
    {
      "no": 1843,
      "word": "diplomacy",
      "meaning": "外交（的手腕）",
      "section": 19
    },
    {
      "no": 1844,
      "word": "embassy",
      "meaning": "大使館；大使一行",
      "section": 19
    },
    {
      "no": 1845,
      "word": "exile",
      "meaning": "亡命（者）；（国外）追放",
      "section": 19
    },
    {
      "no": 1846,
      "word": "refuge",
      "meaning": "避難（所）；保護",
      "section": 19
    },
    {
      "no": 1847,
      "word": "plight",
      "meaning": "窮状（＝ predicament）；（悪い）状態",
      "section": 19
    },
    {
      "no": 1848,
      "word": "solitude",
      "meaning": "ひとりでいること；孤独",
      "section": 19
    },
    {
      "no": 1849,
      "word": "fallacy",
      "meaning": "誤った考え，誤信；錯誤",
      "section": 19
    },
    {
      "no": 1850,
      "word": "latitude",
      "meaning": "緯度；（行動・思想などの）許容範囲",
      "section": 19
    },
    {
      "no": 1851,
      "word": "eclipse",
      "meaning": "（日食・月食などの）食；（名声などの）失墜",
      "section": 19
    },
    {
      "no": 1852,
      "word": "basin",
      "meaning": "流域；盆地，海盆；洗面器［台］",
      "section": 19
    },
    {
      "no": 1853,
      "word": "erosion",
      "meaning": "浸食；衰退",
      "section": 19
    },
    {
      "no": 1854,
      "word": "archaeology",
      "meaning": "考古学",
      "section": 19
    },
    {
      "no": 1855,
      "word": "errand",
      "meaning": "（人の）使い，使い走り；用件",
      "section": 19
    },
    {
      "no": 1856,
      "word": "mercy",
      "meaning": "慈悲；〔通例a ～〕幸運",
      "section": 19
    },
    {
      "no": 1857,
      "word": "rhetoric",
      "meaning": "修辞（法）；美辞麗句",
      "section": 19
    },
    {
      "no": 1858,
      "word": "verse",
      "meaning": "韻文（⇔ prose 散文）；詩",
      "section": 19
    },
    {
      "no": 1859,
      "word": "congestion",
      "meaning": "混雑",
      "section": 19
    },
    {
      "no": 1860,
      "word": "sewage",
      "meaning": "下水",
      "section": 19
    },
    {
      "no": 1861,
      "word": "complement",
      "meaning": "（～の）補完物，補足（to）；（文法の）補語",
      "section": 19
    },
    {
      "no": 1862,
      "word": "subsidy",
      "meaning": "補助金；報奨金",
      "section": 19
    },
    {
      "no": 1863,
      "word": "mortgage",
      "meaning": "住宅ローン；抵当（権）",
      "section": 19
    },
    {
      "no": 1864,
      "word": "attorney",
      "meaning": "【米】 弁護士；代理人",
      "section": 19
    },
    {
      "no": 1865,
      "word": "outfit",
      "meaning": "衣装一式；装備［道具］一式；組織",
      "section": 19
    },
    {
      "no": 1866,
      "word": "bulk",
      "meaning": "〔the ～〕（～の）大半（of）；大きさ；大量",
      "section": 19
    },
    {
      "no": 1867,
      "word": "reunion",
      "meaning": "再会（の集い）；再結合",
      "section": 19
    },
    {
      "no": 1868,
      "word": "synthesis",
      "meaning": "合成；総合（⇔ analysis ⇒ 363）",
      "section": 19
    },
    {
      "no": 1869,
      "word": "mold",
      "meaning": "鋳型；鋳物；性格；かび",
      "section": 19
    },
    {
      "no": 1870,
      "word": "thirst",
      "meaning": "（のどの）渇き；（～に対する）渇望（for）",
      "section": 19
    },
    {
      "no": 1871,
      "word": "greed",
      "meaning": "強欲",
      "section": 19
    },
    {
      "no": 1872,
      "word": "bribe",
      "meaning": "賄賂",
      "section": 19
    },
    {
      "no": 1873,
      "word": "contempt",
      "meaning": "軽蔑；恥辱",
      "section": 19
    },
    {
      "no": 1874,
      "word": "texture",
      "meaning": "感触，手触り；本質；質感",
      "section": 19
    },
    {
      "no": 1875,
      "word": "orphan",
      "meaning": "孤児",
      "section": 19
    },
    {
      "no": 1876,
      "word": "harassment",
      "meaning": "嫌がらせ，ハラスメント",
      "section": 19
    },
    {
      "no": 1877,
      "word": "hay",
      "meaning": "干し草",
      "section": 19
    },
    {
      "no": 1878,
      "word": "doctrine",
      "meaning": "教義；【米】（政策上の）主義",
      "section": 19
    },
    {
      "no": 1879,
      "word": "holistic",
      "meaning": "全体論の；（医療が）ホリスティックの",
      "section": 19
    },
    {
      "no": 1880,
      "word": "liable",
      "meaning": "しがちな；（～を）受けやすい（to）；責任がある",
      "section": 19
    },
    {
      "no": 1881,
      "word": "earnest",
      "meaning": "まじめな，熱心な",
      "section": 19
    },
    {
      "no": 1882,
      "word": "intelligible",
      "meaning": "（簡単に）理解できる",
      "section": 19
    },
    {
      "no": 1883,
      "word": "abrupt",
      "meaning": "突然の（≒ sudden）",
      "section": 19
    },
    {
      "no": 1884,
      "word": "reckless",
      "meaning": "無謀な；（～を）顧みない（of）",
      "section": 19
    },
    {
      "no": 1885,
      "word": "furious",
      "meaning": "激怒した；猛烈な",
      "section": 19
    },
    {
      "no": 1886,
      "word": "eloquent",
      "meaning": "雄弁な；説得力のある",
      "section": 19
    },
    {
      "no": 1887,
      "word": "juvenile",
      "meaning": "青少年の",
      "section": 19
    },
    {
      "no": 1888,
      "word": "notorious",
      "meaning": "悪名高い（≒ infamous）",
      "section": 19
    },
    {
      "no": 1889,
      "word": "timid",
      "meaning": "臆病な；内気な",
      "section": 19
    },
    {
      "no": 1890,
      "word": "humid",
      "meaning": "湿気のある（≒ muggy 蒸し暑い）",
      "section": 19
    },
    {
      "no": 1891,
      "word": "contagious",
      "meaning": "感染（性）の；病気を伝染する",
      "section": 19
    },
    {
      "no": 1892,
      "word": "cynical",
      "meaning": "冷笑的な，皮肉な",
      "section": 19
    },
    {
      "no": 1893,
      "word": "dumb",
      "meaning": "ばかげた；口のきけない；無言の",
      "section": 19
    },
    {
      "no": 1894,
      "word": "monotonous",
      "meaning": "単調な",
      "section": 19
    },
    {
      "no": 1895,
      "word": "perpetual",
      "meaning": "永続的な；ひっきりなしの",
      "section": 19
    },
    {
      "no": 1896,
      "word": "dizzy",
      "meaning": "目まいがする；当惑した",
      "section": 19
    },
    {
      "no": 1897,
      "word": "weary",
      "meaning": "疲れ果てた；（～に）うんざりした（of）",
      "section": 19
    },
    {
      "no": 1898,
      "word": "numb",
      "meaning": "麻痺した，無感覚な；ぼう然とした",
      "section": 19
    },
    {
      "no": 1899,
      "word": "mortal",
      "meaning": "致命的な（≒ fatal）；死すべき（運命の）（⇔ immortal 不死の）",
      "section": 19
    },
    {
      "no": 1900,
      "word": "zealous",
      "meaning": "熱心な；熱狂的な",
      "section": 19
    }
  ]
};
  if (typeof module === "object" && module.exports) module.exports = dataset;
  else root.Target1900Dataset = dataset;
})(typeof globalThis !== "undefined" ? globalThis : this);
