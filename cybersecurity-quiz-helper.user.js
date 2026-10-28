// ==UserScript==
// @name         问卷星·2026网络安全知识竞赛题库助手
// @namespace    local.wjx.cybersecurity
// @version      1.1.0
// @description  南京晓庄学院网络安全知识竞赛参考题库助手；保存基本信息，刷新后快速作答并按设置自动提交，仅在指定页面生效。
// @match        https://ks.wjx.com/vm/ep8c2Pw.aspx*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  if (location.hostname !== 'ks.wjx.com' || location.pathname.toLowerCase() !== '/vm/ep8c2pw.aspx') return;
  if (document.getElementById('wjx-bank-assistant')) return;

  // 题库来源：《网络安全知识竞赛题库_69题含答案.xlsx》。
  // 答案是题库中的参考答案，未取得本场竞赛官方答案。
  const BANK = [{"id":1,"type":"单选题","q":"利用 NFC 手段进行诈骗是目前电信诈骗网络犯罪的一种新型手段，防范 NFC 盗刷的方法包括（）","options":["始终开放 NFC 传输功能，无需定期关闭","关闭不必要的权限，确保没有恶意软件获得 NFC 权限"],"answer":"B"},{"id":2,"type":"单选题","q":"关于公共场所的免费 Wi‑Fi，下列说法错误的是（）","options":["需要与 Wi‑Fi 提供单位确认网络名称，避免连接到钓鱼 Wi‑Fi","可以随意连接","使用支付 App 时尽量断开 Wi‑Fi，改为使用蜂窝网络"],"answer":"B"},{"id":3,"type":"单选题","q":"在二手平台上进行交易时，我们应该（）","options":["脱离平台，用聊天软件私下联络，通过转账付款等方式进行交易","切勿脱离平台进行交易"],"answer":"B"},{"id":4,"type":"单选题","q":"骗子通过发高薪兼职信息吸引受害者参与，再通过套路不断鼓动受害者投钱代刷，最终骗取所有投资钱财的诈骗手段，我们一般称为 “兼职刷单类诈骗”，该诈骗属于?（）","options":["杀鸟盘","杀猪盘"],"answer":"A"},{"id":5,"type":"单选题","q":"收到的电子邮件明确提及您的个人信息，或提及中奖、信贷、投资等事项时，您应该（）","options":["提高警惕，很有可能涉及诈骗","先看看再说，尝试一下"],"answer":"A"},{"id":6,"type":"单选题","q":"某跨国企业在中国境内设立研发中心，日常开展用户行为数据的收集、存储和分析工作。该企业的数据合规官正在研究《中华人民共和国数据安全法》的适用范围。根据《中华人民共和国数据安全法》的规定，该研发中心在中国境内开展的数据处理活动应当适用本法。该法的立法目的不包括以下哪一项（）。","options":["规范数据处理活动，保障数据安全","促进数据开发利用","保护个人、组织的合法权益","促进数据的无条件自由流动"],"answer":"D"},{"id":7,"type":"单选题","q":"以下哪种行为更易导致账号被盗用?（）","options":["启用双重验证登录","定期更换密码并使用复杂密码","在多个网站上使用相同的密码"],"answer":"C"},{"id":8,"type":"单选题","q":"以下哪种行为最有可能导致个人信息泄露?（）","options":["授权前查看 App 个人信息保护条款","在不明网站填写个人真实信息","为身份证复印件加水印"],"answer":"B"},{"id":9,"type":"单选题","q":"以下哪种行为可能增加电脑感染病毒的风险?（）","options":["使用 U 盘前先进行病毒扫描","定期更新操作系统和杀毒软件","从不明网站下载软件"],"answer":"C"},{"id":10,"type":"单选题","q":"网页中弹出付费预测彩票中奖结果的广告，我们应该（）","options":["选择无视，不点击广告","点击广告并付费预测，万一中大奖呢"],"answer":"A"},{"id":11,"type":"单选题","q":"根据《网络安全审查办法》，以下哪项不属于网络安全审查的重点内容（）?","options":["关键信息基础设施的安全性和可能存在的安全风险","采购网络产品和服务的安全性和可控性","网络产品和服务的供应商是否为本国企业","网络产品和服务上线后的运行安全"],"answer":"C"},{"id":12,"type":"单选题","q":"在进行网络交易时，我们应该（）","options":["通过搜索引擎上的不明网址或网站链接进入交易","避免通过公用计算机进行网络交易"],"answer":"B"},{"id":13,"type":"单选题","q":"根据《中华人民共和国个人信息保护法》规定，收集个人信息，应当限于实现处理目的的（），不得过度收集个人信息。","options":["最大范围","最小范围"],"answer":"B"},{"id":14,"type":"单选题","q":"防火墙是一种__系统，用于监控和控制进出网络的数据流量，通过预定义的安全规则允许或拒绝数据包传输，从而保护内部网络免受外部威胁和未经授权访问。","options":["消防安全","网络安全"],"answer":"B"},{"id":15,"type":"单选题","q":"收到 “快递丢失，点击链接领取赔偿” 的短信，正确做法是?（）","options":["按照短信提示点击领取","不点击陌生链接，拨打快递公司官方客服电话核实。"],"answer":"B"},{"id":16,"type":"单选题","q":"按照《中华人民共和国网络安全法》的要求，关键信息基础设施的运营者应当（）对其网络的安全性和可能存在的风险开展检测评估。","options":["自行","自行或者委托网络安全服务机构","委托网络安全服务机构","自行并且委托网络安全服务机构"],"answer":"B"},{"id":17,"type":"单选题","q":"微信好友拉你加入投资群，并说有专业老师指导炒股赚钱，稳赚不赔。你应该（）","options":["将投资群推荐给更多好友","立即按照对方要求操作","不予理会，网络上所谓的 “理财专家” 都是诈骗，不可信"],"answer":"C"},{"id":18,"type":"单选题","q":"根据《网络安全标识管理办法》，网络安全标识对应的网络安全能力由低到高依次分为哪几个等级?（）","options":["初级、中级、高级","基础级、增强级、领先级"],"answer":"B"},{"id":19,"type":"单选题","q":"使用网盘分享照片给朋友时，以下哪种做法更安全?（）","options":["公开链接，方便所有人看","设置提取码，并仅告知指定朋友"],"answer":"B"},{"id":20,"type":"单选题","q":"2025 年 10 月 28 日，第十四届全国人大常委会第十八次会议通过了关于修改《中华人民共和国网络安全法》的决定，修改后的《中华人民共和国网络安全法》生效时间为?（）","options":["2025‑10‑28","2026‑01‑01"],"answer":"B"},{"id":21,"type":"单选题","q":"《网络数据安全管理条例》是我国网络数据安全领域首个基础性。（）","options":["行政法规","法律","部门规章"],"answer":"A"},{"id":22,"type":"单选题","q":"根据《中华人民共和国数据安全法》规定，重要数据的处理者应当__至少开展一次数据安全风险评估。","options":["每半年","每季度","每年"],"answer":"C"},{"id":23,"type":"单选题","q":"根据《中华人民共和国数据安全法》，我国实行什么制度以加强对重要数据和核心数据的保护?（）","options":["数据统一管理制度","数据分类分级保护制度"],"answer":"B"},{"id":24,"type":"单选题","q":"下列哪种网络传输协议在传输数据时安全性较高?（）","options":["HTTPS","HTTP","FTP"],"answer":"A"},{"id":25,"type":"单选题","q":"根据修订后的《中华人民共和国网络安全法》，造成关键信息基础设施丧失主要功能等特别严重危害网络安全后果的，网络运营者最高可被处以多少罚款（）","options":["1000 万元","200 万元","500 万元"],"answer":"A"},{"id":26,"type":"单选题","q":"国家网络安全宣传周的举办范围?（）","options":["仅地方省会城市","全国各地"],"answer":"B"},{"id":27,"type":"单选题","q":"你收到一封 “公司财务部” 邮件，要求点击链接更新工资卡信息，我们应该（）","options":["点击链接更新","直接联系公司财务人员核实，不点击不明链接"],"answer":"B"},{"id":28,"type":"单选题","q":"身份证件号码、个人生物识别信息、通信记录和内容、健康生理信息等属于（）","options":["公共信息","个人敏感信息","一般个人信息"],"answer":"B"},{"id":29,"type":"单选题","q":"VPN 是指（）","options":["虚拟的专用网络","虚拟的包过滤网络"],"answer":"A"},{"id":30,"type":"单选题","q":"在日常生活中，怎样做才能保护好我们的个人信息?（）","options":["涂改或撕毁快递单上的个人信息","随意参加街边扫码注册领奖品的活动"],"answer":"A"},{"id":31,"type":"单选题","q":"以下哪个选项，有助于保护个人信息?（）","options":["从官方应用商店下载正规应用并合理使用","随意扫描陌生二维码"],"answer":"A"},{"id":32,"type":"单选题","q":"你收到一条语音电话，听起来像是 “子女” 的声音，说 “我手机掉水里了，现在借朋友手机，给我转 2000 块买新手机”，你应该怎么做?（）","options":["听到子女的声音就赶紧转账","挂断，打子女的电话确认"],"answer":"B"},{"id":33,"type":"单选题","q":"注销不用的购物 APP 账号时，关键操作是?（）","options":["删除所有订单记录","仅卸载 APP","解绑银行卡并清除个人资料"],"answer":"C"},{"id":34,"type":"单选题","q":"网络刷单兼职、告知中奖要求垫付资金的行为，一律都是诈骗。此说法（）","options":["一律都是诈骗","肯定有些是真实的，机不可失"],"answer":"A"},{"id":35,"type":"多选题","q":"下列哪些选项可以有效保护我们上传到云平台的数据安全?（）","options":["上传到云平台中的数据设置密码","定期整理清除上传到云平台的数据","在网吧等不确定网络连接安全性的地点使用云平台","使用免费或者公共场合 WIFI 上传数据到云平台"],"answer":"A|B"},{"id":36,"type":"多选题","q":"网络安全的法律法规包括:（）","options":["《中华人民共和国网络安全法》","《中华人民共和国数据安全法》","《中华人民共和国个人信息保护法》","《中华人民共和国刑法》中关于网络犯罪的相关条款"],"answer":"A|B|C|D"},{"id":37,"type":"多选题","q":"以下哪些属于网络安全防护措施? （）","options":["安装杀毒软件和防火墙","及时更新操作系统和软件","不随意点击不明链接和下载不明文件","定期进行数据备份"],"answer":"A|B|C|D"},{"id":38,"type":"多选题","q":"防范网络诈骗的方法有: （）","options":["不轻易相信陌生人的信息和承诺","不随意透露个人信息和资金信息","仔细核实信息来源和真实性","遇到可疑情况及时咨询相关机构或报警"],"answer":"A|B|C|D"},{"id":39,"type":"多选题","q":"网络钓鱼是指攻击者利用伪造的网站或欺骗性的电子邮件进行的网络诈骗活动。以下属于网络钓鱼常见攻击手段的是（）","options":["伪造相似域名的网站","显示虚假 IP 地址而非域名","超链接欺骗","弹出窗口欺骗"],"answer":"A|B|C|D"},{"id":40,"type":"多选题","q":"在供应链安全管理中，对于外包运维团队应采取的管控措施包括:（）","options":["签订安全保密协议","提供独立的运维账号并实施双因素认证","实时监控其操作行为并留存日志","允许外包人员自携电脑接入内网"],"answer":"A|B|C"},{"id":41,"type":"多选题","q":"个人在网络环境中应该注意保护的信息有:（）","options":["身份证号码","银行卡号","手机号码","家庭住址"],"answer":"A|B|C|D"},{"id":42,"type":"多选题","q":"为防范勒索软件攻击，需排查服务器系统层面的哪些风险?（）","options":["操作系统补丁是否及时更新","是否存在弱口令（如 admin123）","是否启用双因素认证登录","是否配置日志自动备份（保留≥6 个月）"],"answer":"A|B|C|D"},{"id":43,"type":"多选题","q":"以下哪些行为可能会影响网络安全?（）","options":["共享 WiFi 密码给陌生人","在网吧等公共场合使用自动保存密码功能","未对家庭 WiFi 进行加密","长时间不关闭电脑和网络设备"],"answer":"A|B|C"},{"id":44,"type":"多选题","q":"依据《国家网络安全事件报告管理办法》，网络运营者在网络安全事件上报工作中，属于明令禁止的违规行为有?（）","options":["迟报网络安全事件","漏报关键事件信息","谎报事件等级与危害情况","隐瞒不报已发生的安全事件"],"answer":"A|B|C|D"},{"id":45,"type":"判断题","q":"根据《数据出境安全评估办法》规定，数据处理者向境外提供重要数据，应当通过所在地省级网信部门向国家网信部门申报数据出境安全评估。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":46,"type":"判断题","q":"App 在申请收集个人信息的权限时，应该同步告知收集使用的目的。此说法（）","options":["正确","错误"],"answer":"Y"},{"id":47,"type":"判断题","q":"如果发现信用卡出现不明交易，应立即联系发卡银行。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":48,"type":"判断题","q":"网络安全事件分为有害程序事件、网络攻击事件、信息破坏事件、信息内容安全事件、设备设施故障、灾害性事件和其他网络安全事件等。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":49,"type":"判断题","q":"小苏收到短信，称其有包裹被扣在邮局，让小苏回电，对方称其包裹涉嫌私藏武器，直接将电话转接到公安局。小苏感到很恐慌，继续接听电话并听从对方要求。小苏的做法对吗? （）","options":["A 错误","B正确"],"answer":"N"},{"id":50,"type":"判断题","q":"诈骗罪是指以非法占有公私财物为目的，用虚构事实或者隐瞒真相的方法，骗取数额较大的公私财物的行为。（）","options":["A 错误","B正确"],"answer":"Y"},{"id":51,"type":"判断题","q":"不打开、不回复可疑邮件、垃圾邮件和不明来源邮件。此说法（）","options":["正确","错误"],"answer":"Y"},{"id":52,"type":"判断题","q":"任何个人和组织不得实施非法侵入、干扰、破坏关键信息基础设施的活动，不得危害关键信息基础设施安全。（）","options":["错误","正确"],"answer":"Y"},{"id":53,"type":"判断题","q":"网络上有很多赚钱机会，比如兼职刷单，可以足不出户，月入上万。此说法（）","options":["错误","正确"],"answer":"N"},{"id":54,"type":"判断题","q":"处理人脸信息前，应当以显著方式、清晰易懂的语言真实、准确、完整地向个人告知人脸信息的处理目的、处理方式，处理的人脸信息保存期限。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":55,"type":"判断题","q":"在不确定安全性的情况下，最好不要回拨陌生来电。此说法（）","options":["正确","错误"],"answer":"Y"},{"id":56,"type":"判断题","q":"使用 App 时，充分阅读并理解隐私政策，不再使用 App 时，先清除账号信息再做删除，才能更好的保护个人信息。（）","options":["正确","错误"],"answer":"Y"},{"id":57,"type":"判断题","q":"计算机中的重要数据无需定期备份，肯定不会丢失。此说法（）","options":["正确","错误"],"answer":"N"},{"id":58,"type":"判断题","q":"人工智能可以学习并识别网络异常行为，并帮助预防潜在网络攻击。此说法（）","options":["正确","错误"],"answer":"Y"},{"id":59,"type":"判断题","q":"DDos 攻击是一种特殊形式的拒绝服务攻击，它采用一种分布和协作的大规模攻击方式。（）","options":["正确","错误"],"answer":"Y"},{"id":60,"type":"判断题","q":"在进行网络交易时，对于网站资质真伪，可通过查询网站备案信息等方式核实。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":61,"type":"判断题","q":"从对信息的破坏性上看，网络攻击可以分为被动攻击和主动攻击，其中伪造属于被动攻击。（）","options":["正确","错误"],"answer":"N"},{"id":62,"type":"判断题","q":"特洛伊木马是指攻击者利用入侵手段，将恶意代码植入目标计算机，进而操纵受害机执行恶意活动。（）","options":["正确","错误"],"answer":"Y"},{"id":63,"type":"判断题","q":"根据《中华人民共和国网络安全法》规定，网络运营者应当为公安机关、国家安全机关依法维护国家安全和侦查犯罪的活动提供技术支持。此说法（）","options":["正确","错误"],"answer":"Y"},{"id":64,"type":"判断题","q":"给身份证、火车票等个人票证拍照发朋友圈，不会泄露个人信息。此说法（）","options":["错误","正确"],"answer":"N"},{"id":65,"type":"判断题","q":"“深度伪造（Deep fake）” 技术是指通过人工智能技术将图片或者视频叠加到原始图片或视频上，对大量数据进行学习后，将人的声音、面部表情及身体动作进行模拟合成。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":66,"type":"判断题","q":"登录账户时，使用双重认证可以提高账户安全性。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":67,"type":"判断题","q":"深度合成服务提供者和使用者不得利用深度合成服务制作、复制、发布、传播虚假新闻信息。此说法（）","options":["错误","正确"],"answer":"Y"},{"id":68,"type":"判断题","q":"网络信息安全中的安全策略模型包括了建立安全环境的3个重要组成部分，分别是健全的法律、先进的技术和安全的协议。 （）","options":["A 错误","B正确"],"answer":"N"},{"id":69,"type":"判断题","q":"网络安全仅指技术层面的防护，与用户安全意识和操作行为无关。此说法（）","options":["正确","错误"],"answer":"N"}];

  function normalize(text) {
    return String(text || '').normalize('NFKC').toLowerCase()
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/【(?:多选题|单选题|判断题)】|\[(?:多选题|单选题|判断题)\]/g, '')
      .replace(/[^\p{L}\p{N}<>=+%]/gu, '');
  }

  function optionText(text) {
    // 题库中有“A 错误”“B正确”，页面中有“A. 错误”“A、错误”。
    return String(text || '').normalize('NFKC').trim()
      .replace(/^[A-H](?:\s*[.、:：)）．]\s*|\s+|(?=[\u3400-\u9FFF]))/i, '');
  }

  const questionIndex = new Map();
  for (const entry of BANK) {
    const key = normalize(entry.q);
    if (!questionIndex.has(key)) questionIndex.set(key, []);
    questionIndex.get(key).push(entry);
  }

  function answerTexts(entry) {
    if (entry.answer === 'Y') return ['正确'];
    if (entry.answer === 'N') return ['错误'];
    return entry.answer.split('|').map(letter => entry.options[letter.charCodeAt(0) - 65]);
  }

  function resolve(question, texts, multiple) {
    const matches = questionIndex.get(normalize(question)) || [];
    if (matches.length !== 1) return { error: matches.length ? '题干匹配存在歧义' : '题库未收录，已跳过' };
    const entry = matches[0];
    if ((entry.type === '多选题') !== multiple) return { error: '题型与题库不同，已跳过' };
    const actual = texts.map(t => normalize(optionText(t)));
    const expected = entry.options.map(t => normalize(optionText(t)));
    if (actual.some(t => !t) || new Set(actual).size !== actual.length ||
        actual.length !== expected.length || [...actual].sort().join('|') !== [...expected].sort().join('|')) {
      return { error: '选项与题库不同，已跳过' };
    }
    const wanted = answerTexts(entry).map(t => normalize(optionText(t)));
    const indices = wanted.map(text => actual.indexOf(text));
    if (!indices.length || indices.some(i => i < 0) || (!multiple && indices.length !== 1)) {
      return { error: '答案无法唯一定位，已跳过' };
    }
    return { entry, indices, answers: indices.map(i => optionText(texts[i])) };
  }

  function readQuestion(field) {
    const title = field.querySelector('.topichtml');
    const group = field.querySelector('.ui-controlgroup');
    const type = field.getAttribute('type');
    if (!title || !group || !['3', '4'].includes(type)) return null;
    const options = [...group.querySelectorAll('.ui-radio, .ui-checkbox')].map(row => ({
      row, label: row.querySelector('.label'), input: row.querySelector('input'),
      icon: row.querySelector('.jqradio, .jqcheck')
    }));
    if (!options.length) return null;
    const question = title.textContent.trim();
    const number = field.querySelector('.topicnumber')?.textContent.trim() || field.id;
    return { field, question, number, options,
      result: resolve(question, options.map(o => o.label?.textContent || ''), type === '4') };
  }

  function selected(option) {
    return Boolean(option.input?.checked || option.icon?.classList.contains('jqchecked') ||
      option.row.getAttribute('aria-checked') === 'true');
  }

  // 也可在此填写默认值；界面保存的设置优先，仅保存在当前浏览器。
  const DEFAULT_SETTINGS = {
    studentId: '', name: '', department: '', identity: '',
    autoAnswer: true, autoSubmit: true
  };
  const STORAGE_KEY = 'njxzc-cybersecurity-quiz-helper:settings:v1';
  const nextTurn = () => new Promise(resolve => setTimeout(resolve, 0));
  let busy = false, stop = false, submitAttempted = false;
  let storageError = '';

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      return { ...DEFAULT_SETTINGS, ...(saved && typeof saved === 'object' ? saved : {}) };
    } catch (_) {
      storageError = '浏览器无法读取已保存设置，请检查后重新保存。';
      return { ...DEFAULT_SETTINGS };
    }
  }
  let settings = loadSettings();
  const host = document.createElement('div');
  host.id = 'wjx-bank-assistant';
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `
    <style>
      :host{all:initial;position:fixed;right:14px;top:80px;z-index:2147483000;font:14px/1.5 "Microsoft YaHei",sans-serif;color:#20304c}
      *{box-sizing:border-box}.card{width:310px;max-height:85vh;background:#fff;border:1px solid #dbe3f3;border-radius:16px;box-shadow:0 10px 32px #243c6a30;overflow:auto}
      header{display:flex;align-items:center;justify-content:space-between;background:#eff4ff;padding:10px 12px;cursor:move;touch-action:none;user-select:none}
      strong{font-size:14px}button,input,select{font:inherit}button{cursor:pointer;border:0;border-radius:9px;padding:8px 10px;background:#eef2fa;color:#254674}
      button:disabled{opacity:.5;cursor:default}.fold{padding:0 7px;background:transparent;font-size:20px}.body{padding:12px}.note{font-size:12px;color:#6a7690;margin-bottom:10px}
      .profile{display:grid;gap:7px;margin-bottom:10px}.profile label{display:grid;grid-template-columns:65px 1fr;align-items:center;gap:6px;font-size:12px}
      input[type=text],select{width:100%;min-width:0;padding:6px;border:1px solid #dbe3f3;border-radius:6px;background:#fff;color:#20304c}
      .switch{display:block;margin:6px 0;font-size:12px}.switch input{vertical-align:middle}.actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.primary{background:#3568df;color:white}
      .status{margin:10px 0;white-space:pre-wrap;font-size:13px}details{border-top:1px solid #edf0f6;padding-top:7px;font-size:12px}summary{cursor:pointer}.list{max-height:180px;overflow:auto;margin-top:8px;overflow-wrap:anywhere}
      .item{margin-bottom:10px}.ok{color:#24704e}.bad{color:#a45911}.hidden{display:none}
      @media(max-width:600px){:host{right:8px;top:65px}.card{width:270px}.body{padding:10px}.list{max-height:130px}}
    </style>
    <div class="card"><header><strong>晓庄网络安全 · 题库助手</strong><button class="fold" title="收起/展开">−</button></header>
      <div class="body"><div class="note">保存基本信息后可在刷新时自动作答和提交。设置保存在当前浏览器，可随时修改或清除。</div>
        <div class="profile">
          <label>学工号<input id="studentId" type="text" autocomplete="off"></label>
          <label>姓名<input id="name" type="text" autocomplete="off"></label>
          <label>学院部门<select id="department"><option value="">请选择</option></select></label>
          <label>您的身份<select id="identity"><option value="">请选择</option></select></label>
        </div>
        <label class="switch"><input type="checkbox" id="autoAnswer">刷新后自动作答</label>
        <label class="switch"><input type="checkbox" id="autoSubmit">填写并核对完成后自动提交</label>
        <div class="actions"><button id="save">保存设置</button><button class="primary" id="fill">保存并作答</button><button id="scan">仅检查</button><button id="stop" disabled>停止</button><button id="clear">清除设置</button></div>
        <div class="status" role="status" aria-live="polite">正在等待页面加载…</div>
        <details><summary>匹配详情</summary><div class="list"></div></details>
      </div></div>`;
  document.body.appendChild(host);
  const status = root.querySelector('.status');
  const list = root.querySelector('.list');
  const fillButton = root.querySelector('#fill');
  const scanButton = root.querySelector('#scan');
  const stopButton = root.querySelector('#stop');
  const saveButton = root.querySelector('#save');
  const clearButton = root.querySelector('#clear');
  const profileKeys = ['studentId', 'name', 'department', 'identity'];
  const switchKeys = ['autoAnswer', 'autoSubmit'];

  function visible(element) {
    return Boolean(element?.isConnected && element.getClientRects().length &&
      getComputedStyle(element).visibility !== 'hidden');
  }

  function profileControls() {
    const basic = [...document.querySelectorAll('.field')].find(field =>
      normalize(field.querySelector('.topichtml')?.textContent) === normalize('基本信息'));
    const identity = [...document.querySelectorAll('.field')].find(field =>
      normalize(field.querySelector('.topichtml')?.textContent) === normalize('您的身份'));
    const rowInput = text => [...(basic?.querySelectorAll('tr') || [])]
      .find(row => normalize(row.querySelector('.rowtitlediv')?.textContent) === normalize(text))
      ?.querySelector('textarea, input[type=text]');
    const department = rowInput('学院部门');
    return {
      studentId: rowInput('学工号'), name: rowInput('姓名'), department,
      select: department?.closest('tr')?.querySelector('select'), identity,
      identityOptions: [...(identity?.querySelectorAll('.ui-radio') || [])].map(row => ({
        row, input: row.querySelector('input'), label: row.querySelector('.label'),
        icon: row.querySelector('.jqradio')
      }))
    };
  }

  function showSettings() {
    const controls = profileControls();
    for (const [key, options] of [
      ['department', [...(controls.select?.options || [])].filter(option => option.value)
        .map(option => ({ value: option.value, text: option.textContent }))],
      ['identity', controls.identityOptions.map(option => ({
        value: optionText(option.label?.textContent || ''), text: optionText(option.label?.textContent || '')
      }))]
    ]) {
      const select = root.querySelector('#' + key);
      for (const option of options) select.add(new Option(option.text, option.value));
    }
    for (const key of profileKeys) root.querySelector('#' + key).value = String(settings[key] || '');
    for (const key of switchKeys) root.querySelector('#' + key).checked = settings[key] === true;
  }

  function readSettings() {
    const values = {};
    for (const key of profileKeys) values[key] = root.querySelector('#' + key).value.trim();
    for (const key of switchKeys) values[key] = root.querySelector('#' + key).checked;
    return values;
  }

  function saveSettings() {
    const values = readSettings();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      settings = values;
      storageError = '';
      status.textContent = '设置已保存。可点击“保存并作答”，下次刷新也会按开关设置运行。';
      return true;
    } catch (_) {
      status.textContent = '设置保存失败，请检查浏览器是否允许本地存储。';
      return false;
    }
  }

  function validateProfile(values, controls = profileControls()) {
    for (const [key, label] of [['studentId', '学工号'], ['name', '姓名']]) {
      const input = controls[key];
      if (!input) throw new Error('未找到' + label + '输入框');
      const value = String(values[key] || '').trim();
      const min = Number(input.getAttribute('minword') || 1);
      const max = Number(input.getAttribute('maxword') || Infinity);
      if (value.length < min || value.length > max) throw new Error(label + '需要填写 ' + min + '–' + max + ' 个字符');
    }
    if (!controls.select || !values.department ||
        ![...controls.select.options].some(option => option.value === values.department && !option.disabled)) {
      throw new Error('请选择页面中的学院部门');
    }
    const identity = controls.identityOptions.find(option =>
      normalize(optionText(option.label?.textContent)) === normalize(values.identity));
    if (!values.identity || !identity) throw new Error('请选择您的身份');
    if ([controls.studentId, controls.name, controls.select, identity.input].some(input => !input || input.disabled)) {
      throw new Error('基本信息输入项暂不可操作');
    }
    return identity;
  }

  function setValue(input, value) {
    if (input.value === value) return;
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new Event('blur', { bubbles: true }));
  }

  function fillProfile(values) {
    const controls = profileControls();
    const identity = validateProfile(values, controls);
    setValue(controls.studentId, values.studentId);
    setValue(controls.name, values.name);
    setValue(controls.select, values.department);
    if (!selected(identity)) identity.label.click();
  }

  function verifyProfile(values) {
    const controls = profileControls();
    const identity = validateProfile(values, controls);
    if (controls.studentId.value !== values.studentId || controls.name.value !== values.name ||
        controls.select.value !== values.department || controls.department.value !== values.department ||
        !selected(identity)) throw new Error('基本信息填写结果未通过核对');
  }

  function collect() {
    return [...document.querySelectorAll('.field')].filter(visible)
      .filter(field => normalize(field.querySelector('.topichtml')?.textContent) !== normalize('您的身份'))
      .map(readQuestion).filter(Boolean);
  }

  function addLine(item, message, ok) {
    const line = document.createElement('div');
    line.className = 'item ' + (ok ? 'ok' : 'bad');
    line.textContent = `${item.number} ${item.question}\n${message}`;
    list.appendChild(line);
  }

  function scan() {
    if (busy) return;
    list.replaceChildren();
    const items = collect();
    for (const item of items) addLine(item, item.result.error || '参考答案：' + item.result.answers.join('；'), !item.result.error);
    status.textContent = `已匹配 ${items.filter(item => !item.result.error).length} 题，待检查 ${items.filter(item => item.result.error).length} 题。`;
    return items;
  }

  function checkStopped() {
    if (stop) throw new Error('已停止');
  }

  function verifyQuestion(item) {
    const wanted = new Set(item.result.indices);
    return item.field.isConnected && item.options.every((option, index) => selected(option) === wanted.has(index));
  }

  async function fillQuestion(item) {
    checkStopped();
    const wanted = new Set(item.result.indices);
    // 各题同时启动，选项同步点击；只让出事件循环以等待页面事件完成。
    for (let index = 0; index < item.options.length; index++) {
      checkStopped();
      const option = item.options[index];
      const shouldSelect = wanted.has(index);
      if ((option.input?.type === 'checkbox' && selected(option) !== shouldSelect) ||
          (option.input?.type !== 'checkbox' && shouldSelect && !selected(option))) {
        if (option.input?.disabled || !item.field.isConnected) throw new Error('选项不可操作或题目已更新');
        const target = option.label || option.icon;
        if (!target) throw new Error('找不到可点击的选项');
        target.click();
      }
    }
    await nextTurn();
    checkStopped();
    if (!verifyQuestion(item)) throw new Error('选中状态核对失败');
  }

  function setBusy(value) {
    busy = value;
    for (const button of [fillButton, scanButton, saveButton, clearButton]) button.disabled = value;
    for (const input of root.querySelectorAll('input, select')) input.disabled = value;
    stopButton.disabled = !value;
  }

  function checkRequiredFields(items) {
    const known = new Set(items.map(item => item.field));
    const controls = profileControls();
    known.add(controls.studentId?.closest('.field'));
    known.add(controls.identity);
    const unknown = [...document.querySelectorAll('.field[req="1"]')].find(field => visible(field) && !known.has(field));
    if (unknown) throw new Error('页面存在未识别的必填题，未自动提交');
    const errors = [...document.querySelectorAll('.field .errorMessage')].filter(element => visible(element) && element.textContent.trim());
    if (errors.length) throw new Error('页面提示填写错误：' + errors[0].textContent.trim());
  }

  async function fill() {
    if (busy || submitAttempted) return;
    setBusy(true);
    stop = false;
    list.replaceChildren();
    const values = { ...settings };
    let done = 0;
    try {
      fillProfile(values);
      // 身份切换可能调整显示题目，等待本轮页面事件完成后再收集。
      await nextTurn();
      checkStopped();
      const items = collect();
      if (!items.length) throw new Error('页面尚未显示题库题目');
      const results = await Promise.allSettled(items.map(async item => {
        if (item.result.error) throw new Error(item.result.error);
        await fillQuestion(item);
      }));
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') done++;
        addLine(items[index], result.status === 'fulfilled' ? '已填写并核对：' + items[index].result.answers.join('；') : result.reason.message, result.status === 'fulfilled');
      });
      checkStopped();
      const failed = results.length - done;
      if (failed) throw new Error(`${failed} 题未通过核对，未自动提交`);
      verifyProfile(values);
      const current = collect();
      if (current.length !== items.length || current.some((item, index) =>
          item.field !== items[index].field || item.question !== items[index].question ||
          item.result.error || !verifyQuestion(item))) throw new Error('题目或选中状态已发生变化，未自动提交');
      checkRequiredFields(current);
      if (values.autoSubmit) {
        const button = document.getElementById('ctlNext');
        if (!visible(button) || button.disabled || button.getAttribute('aria-disabled') === 'true') {
          throw new Error('提交按钮尚不可用，请按页面提示处理');
        }
        checkStopped();
        submitAttempted = true;
        status.textContent = `基本信息及 ${done} 题已填写并核对，已点击提交。请查看页面结果；如出现验证码或确认提示，请按页面要求完成。`;
        button.click();
      } else status.textContent = `基本信息及 ${done} 题已填写并核对。自动提交已关闭。`;
    } catch (error) {
      status.textContent = `已完成 ${done} 题。${error.message}`;
    } finally {
      setBusy(false);
      if (submitAttempted) fillButton.disabled = true;
    }
  }

  fillButton.addEventListener('click', () => { if (saveSettings()) fill(); });
  saveButton.addEventListener('click', saveSettings);
  scanButton.addEventListener('click', scan);
  stopButton.addEventListener('click', () => { stop = true; status.textContent = '正在停止，尚未发出的提交将取消。'; });
  clearButton.addEventListener('click', () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      settings = { studentId: '', name: '', department: '', identity: '', autoAnswer: false, autoSubmit: false };
      for (const key of profileKeys) root.querySelector('#' + key).value = '';
      for (const key of switchKeys) root.querySelector('#' + key).checked = false;
      status.textContent = '已清除保存的设置，当前页面的已填内容可自行修改。';
    } catch (_) { status.textContent = '无法清除设置，请检查浏览器本地存储权限。'; }
  });
  root.querySelector('.fold').addEventListener('click', event => {
    const hidden = root.querySelector('.body').classList.toggle('hidden');
    event.currentTarget.textContent = hidden ? '+' : '−';
  });

  // 鼠标或触摸拖动；拖动范围限制在可见屏幕内。
  const header = root.querySelector('header');
  let drag = null;
  function clampPosition(left, top) {
    const rect = host.getBoundingClientRect();
    host.style.left = Math.max(0, Math.min(left, window.innerWidth - rect.width)) + 'px';
    host.style.top = Math.max(0, Math.min(top, window.innerHeight - rect.height)) + 'px';
    host.style.right = 'auto';
  }
  header.addEventListener('pointerdown', event => {
    if (event.target.closest('button') || event.button !== 0) return;
    const rect = host.getBoundingClientRect();
    drag = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    header.setPointerCapture(event.pointerId);
  });
  header.addEventListener('pointermove', event => {
    if (drag) clampPosition(event.clientX - drag.x, event.clientY - drag.y);
  });
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) header.addEventListener(name, () => { drag = null; });
  window.addEventListener('resize', () => {
    const rect = host.getBoundingClientRect(); clampPosition(rect.left, rect.top);
  });

  async function initialize() {
    // 等待页面事件和必需控件就绪，无需等待全部图片等资源加载。
    if (document.readyState === 'loading') await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
    await nextTurn();
    const started = Date.now();
    while ((!profileControls().select || !visible(document.getElementById('ctlNext')) || !collect().length) && Date.now() - started < 15000) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    showSettings();
    scan();
    if (storageError) { status.textContent = storageError; return; }
    try { validateProfile(settings); }
    catch (error) { status.textContent = '请填写并保存基本信息。' + error.message; return; }
    if (settings.autoAnswer) await fill();
    else status.textContent += '\n刷新后自动作答已关闭，可点击“保存并作答”。';
  }
  initialize().catch(error => { status.textContent = '初始化失败：' + error.message; });
})();
