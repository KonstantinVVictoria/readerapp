import { GenericIconProps } from "./IconGeneric";

type Icon = GenericIconProps & {
  colors?: {
    main: string;
  };
};
export default function ReadingIcon(props: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width={props.width}
      height={props.height}
      viewBox="0 0 641.9627 598"
      style={{ ...props.style }}
    >
      <path
        d="M607.64146,742.65761c-3.12074,0-6.27329-.04942-9.36768-.14612l.0703-2.24742c4.4433.1384,8.9777.17685,13.4419.11535l.03078,2.24962Q609.73241,742.65714,607.64146,742.65761Zm17.71051-.5218-.13182-2.24525c4.44989-.26254,8.95686-.63163,13.39573-1.09625l.23506,2.23645c-4.47289.46909-9.01388.84147-13.49892,1.1051Zm-40.60131-.3504c-4.4872-.34382-9.02165-.79418-13.47813-1.34119l.27459-2.23208c4.42235.54151,8.9217.98971,13.37488,1.33023Zm67.53343-2.47372-.33723-2.22328c4.42132-.67116,8.87666-1.44994,13.23864-2.31663l.43827,2.20572c-4.396.87323-8.88434,1.65865-13.33968,2.33423Zm-94.4122-.82274c-4.43283-.75135-8.90745-1.61475-13.29907-2.56822l.4773-2.19908c4.35814.94688,8.7981,1.80369,13.19744,2.54845Zm120.973-4.45648-.54043-2.18374c4.34-1.07319,8.70419-2.25951,12.97172-3.525l.6393,2.15739c-4.30047,1.27535-8.6976,2.47047-13.07059,3.55138Zm-147.43768-1.28961c-4.34826-1.15668-8.724-2.42869-13.00579-3.78311l.67775-2.14421c4.24939,1.3434,8.5916,2.60554,12.90584,3.75233ZM704.80807,726.33l-.73818-2.12445c4.21149-1.46425,8.44716-3.04714,12.59168-4.70579l.83483,2.08929c-4.1752,1.6708-8.44386,3.26578-12.68828,4.741Zm-199.2576-1.76195c-4.223-1.55211-8.47243-3.22728-12.629-4.97822l.87328-2.07391c4.1247,1.73776,8.34115,3.39976,12.53233,4.94091Zm224.37388-8.28791-.93149-2.04755c4.04456-1.83771,8.10993-3.79957,12.08305-5.83061l1.02388,2.0037c-4.00391,2.04642-8.1001,4.02254-12.17539,5.87456ZM480.5391,714.03724c-4.05936-1.93438-8.13411-3.99181-12.10945-6.11621l1.06-1.98384c3.94569,2.10793,7.98854,4.15,12.01717,6.07009Zm273.4548-10.06082-1.11385-1.95306c3.87863-2.21339,7.75072-4.54,11.50639-6.91589l1.20171,1.90035C761.804,699.40239,757.90336,701.74764,753.9939,703.97642Zm-297.37655-2.7198c-3.8611-2.29687-7.72769-4.719-11.49157-7.1982l1.238-1.87837c3.73477,2.46054,7.57168,4.864,11.40368,7.14328ZM776.854,689.51409l-1.2874-1.84322c3.65237-2.55175,7.29707-5.2243,10.833-7.94188l1.37089,1.78388C784.20817,684.25134,780.535,686.94366,776.854,689.51409Zm-342.87537-3.168c-3.631-2.6374-7.25809-5.4-10.7814-8.21318l1.40383-1.75752c3.49639,2.79118,7.09606,5.533,10.699,8.1495Zm364.33382-13.32434-1.44994-1.72021c3.40418-2.87246,6.79179-5.86576,10.0707-8.89751L808.46,664.0561C805.15692,667.111,801.74291,670.12733,798.31242,673.02176Zm-385.50884-3.5832c-3.38161-2.96144-6.74125-6.04152-9.985-9.15568l1.55762-1.6235c3.21959,3.091,6.55342,6.14807,9.90922,9.08759Zm405.3877-14.804-1.60157-1.57959c3.1383-3.18,6.24257-6.471,9.22486-9.78073l1.67188,1.50492c-3.0054,3.33608-6.13268,6.65128-9.29517,9.85545Zm-424.92823-3.95007c-3.1026-3.26238-6.16675-6.63471-9.10732-10.02237L385.855,639.188c2.91806,3.36239,5.95861,6.70831,9.03815,9.94548ZM836.32358,634.5097l-1.73776-1.428c2.83514-3.45025,5.62633-7.01039,8.29887-10.58365l1.80148,1.3467C841.99386,627.44552,839.1807,631.03418,836.32358,634.5097Zm-460.80781-4.27083c-2.78624-3.52056-5.52966-7.15537-8.15442-10.80337l1.82564-1.31375c2.605,3.61943,5.32755,7.22676,8.09292,10.7221Zm477.03755-17.43144-1.86077-1.26321c2.50887-3.69417,4.96612-7.4959,7.30257-11.30206l1.91791,1.17757C857.55686,605.2544,855.08093,609.08583,852.55332,612.80743Zm-492.84279-4.53224c-2.45123-3.75778-4.85027-7.62442-7.13121-11.49543l1.93769-1.14241c2.26394,3.84131,4.64486,7.67933,7.0774,11.40752Zm507.03274-18.57174-1.96845-1.08745c2.15961-3.90833,4.2576-7.92211,6.23819-11.93039l2.01678.99742C871.03494,581.721,868.91934,585.76547,866.74327,589.70345Zm-520.76073-4.73c-2.09807-3.96545-4.13237-8.03416-6.04647-12.0918l2.03436-.96006c1.89978,4.027,3.91821,8.06489,6.00035,11.99957Zm532.77456-19.59-2.06073-.90293c1.79268-4.094,3.514-8.28677,5.11667-12.46094l2.10026.80627c-1.6147,4.20716-3.35025,8.43186-5.1562,12.55765Zm-544.30519-4.85413c-1.72458-4.139-3.37613-8.37355-4.90848-12.58729l2.11452-.76891c1.52028,4.18184,3.15919,8.38344,4.87,12.49059ZM888.485,540.03978l-2.13536-.7074c1.40387-4.23016,2.72859-8.55374,3.93689-12.852l2.16614.60854c-1.21813,4.33128-2.55386,8.68888-3.96757,12.95091ZM325.21,535.10989c-1.33846-4.2873-2.59622-8.66686-3.73807-13.019l2.176-.5712c1.13307,4.31915,2.38146,8.66574,3.7095,12.9201Zm570.60724-21.141-2.19141-.50967c1.00731-4.33563,1.92779-8.76354,2.73735-13.15848l2.21226.40643c-.81487,4.43017-1.743,8.891-2.758,13.2618ZM318.339,508.91378c-.93808-4.39384-1.78719-8.87008-2.52318-13.30677l2.2189-.36908c.731,4.40374,1.57355,8.84591,2.5045,13.2057ZM900.7196,487.3356l-2.22986-.30537c.60523-4.40593,1.11606-8.89861,1.51922-13.354l2.24087.20212c-.4063,4.49054-.92146,9.0173-1.53,13.45731Zm-586.814-5.13641c-.53055-4.45316-.96611-8.98871-1.29507-13.48032l2.24416-.16478c.3257,4.45867.75848,8.95905,1.28519,13.37926Zm589.26026-21.83192-2.24746-.10106c.1999-4.45755.30207-8.97883.30207-13.43747h2.24963c.00019,4.49276-.102,9.04808-.304,13.53861ZM311.929,455.19133c-.07689-2.75824-.11588-5.57248-.11645-8.36259q0-2.59675.0445-5.18363l2.24965.03955q-.04451,2.56712-.0445,5.14411c.00057,2.76923.03956,5.5626.11534,8.30108Zm589.275-11.50088c-.04612-4.46031-.19548-8.981-.44269-13.43747l2.2453-.12523c.24937,4.4905.39982,9.04531.44711,13.53856Zm-586.5633-15.43608-2.24525-.14061c.28066-4.49485.66841-9.03483,1.15119-13.494l2.23647.24222C315.30361,419.28763,314.9197,423.793,314.64068,428.25437ZM899.70915,416.8545c-.44928-4.435-1.00839-8.92224-1.66092-13.33806l2.22554-.32843c.65685,4.44933,1.22039,8.9706,1.67409,13.43915Zm-582.1746-15.318-2.22328-.34382c.68928-4.4504,1.49007-8.936,2.38034-13.33368l2.20461.446C319.01311,392.66917,318.21837,397.12068,317.53455,401.53649Zm578.24321-11.26582c-.85784-4.38836-1.82562-8.80582-2.878-13.12935l2.18591-.53165c1.06,4.35649,2.03546,8.808,2.89989,13.22932ZM322.86322,375.1965l-2.18209-.547c1.09241-4.357,2.30237-8.75036,3.59637-13.0585l2.15407.647C325.148,366.51315,323.94737,370.87294,322.86322,375.1965ZM889.42,364.15807c-1.25441-4.28344-2.62535-8.59217-4.07416-12.80805l2.12661-.73159c1.461,4.24831,2.84286,8.59106,4.10711,12.90692Zm-558.8125-14.73532-2.12223-.74587c1.495-4.25268,3.10918-8.52575,4.79753-12.7004l2.086.84363c-1.67579,4.14228-3.2779,8.38289-4.76138,12.60264ZM880.684,338.743c-1.64115-4.1401-3.39863-8.295-5.22425-12.35l2.05188-.9238c1.83988,4.08628,3.61063,8.27306,5.26388,12.44447ZM340.70441,324.45472l-2.04423-.93918c1.87891-4.09178,3.87863-8.19507,5.94378-12.19567l1.9992,1.03142C344.55344,316.32175,342.56907,320.3937,340.70441,324.45472Zm528.96953-10.16351c-2.01343-3.9715-4.14668-7.95121-6.34031-11.82714l1.95743-1.10834c2.21123,3.90613,4.35977,7.91606,6.38864,11.9183Zm-516.62231-13.756-1.94976-1.12263c2.24417-3.89679,4.61078-7.79743,7.03455-11.59261l1.896,1.21051c-2.40506,3.76659-4.75412,7.6376-6.98069,11.50473Zm503.40559-9.60056c-2.37706-3.78419-4.86622-7.55412-7.39815-11.20539l1.84759-1.28191c2.55175,3.6793,5.06063,7.47778,7.45524,11.29111ZM367.53159,277.86018l-1.83883-1.29619c2.59347-3.67819,5.305-7.34431,8.06106-10.89673l1.77731,1.37859C372.79652,270.57189,370.10474,274.21,367.53159,277.86018Zm473.623-8.98981c-2.711-3.55078-5.534-7.08068-8.39331-10.4914l1.72458-1.445c2.88017,3.43709,5.7252,6.99337,8.457,10.571ZM384.014,256.611l-1.71249-1.45876c2.91038-3.41841,5.94378-6.82089,9.01563-10.113l1.6444,1.53453C389.9133,249.84118,386.903,253.21841,384.014,256.611Zm439.88487-8.33293c-3.02187-3.28934-6.15687-6.54958-9.31606-9.689L816.169,236.993c3.18333,3.16412,6.34144,6.44852,9.38637,9.76259Zm-421.545-11.32019-1.573-1.60814c3.21684-3.14709,6.54575-6.25849,9.89329-9.24739l1.49828,1.67844C408.85022,230.74664,405.54661,233.8344,402.35391,236.95788Zm402.48231-7.62607c-3.31185-3.00374-6.73137-5.96631-10.163-8.80525l1.43461-1.73338c3.45683,2.86044,6.90271,5.84546,10.23983,8.87228ZM422.39644,219.0601l-1.42032-1.74436c3.47938-2.83348,7.07519-5.628,10.688-8.306l1.34011,1.807C429.41836,213.475,425.84945,216.248,422.39644,219.0601Zm361.72274-6.86923c-3.57331-2.69068-7.24982-5.33083-10.92746-7.84685l1.2698-1.8564c3.70625,2.5347,7.4102,5.19462,11.011,7.90617ZM443.973,203.06815l-1.25554-1.86628c3.72378-2.50559,7.5574-4.959,11.39488-7.29378l1.16872,1.9223C451.47327,198.147,447.66873,200.58234,443.973,203.06815Zm317.942-6.064c-3.80178-2.3529-7.70569-4.64648-11.60305-6.81815l1.09408-1.96514c3.9281,2.18813,7.86169,4.49984,11.69308,6.86977Zm-295.00942-7.88534-1.07978-1.97393c3.93965-2.15573,7.97925-4.2472,12.00621-6.21729l.98863,2.02116c-3.99624,1.95473-8.00506,4.03027-11.915,6.17007Zm271.499-5.21219c-4.00277-1.99426-8.10333-3.921-12.18743-5.72629l.90952-2.05742c4.11595,1.81906,8.24833,3.76058,12.28193,5.77023Zm-247.40313-6.57374-.89413-2.064c4.11709-1.78445,8.32852-3.49586,12.517-5.087l.7986,2.10355C499.26621,173.86391,495.08713,175.56213,491.00141,177.33285Zm222.77344-4.31311c-4.16541-1.61528-8.42847-3.15643-12.67186-4.58l.7162-2.13321c4.2752,1.43513,8.5713,2.98781,12.76852,4.61628Zm-197.68022-5.21549-.7008-2.13761c4.2752-1.40162,8.63718-2.72143,12.96405-3.9215l.6014,2.16726C524.66539,165.10368,520.33689,166.413,516.09463,167.80425Zm172.16953-3.34482c-4.29059-1.22313-8.66687-2.36224-13.00687-3.38545l.51629-2.18924c4.37407,1.03091,8.7833,2.1788,13.108,3.41073Zm-146.27382-3.84187-.5009-2.19307c4.38288-1.00127,8.84756-1.91352,13.26942-2.711l.39987,2.21339C550.76976,158.71888,546.33968,159.624,541.99034,160.61756Zm120.11729-2.32489c-4.38071-.82219-8.84264-1.55374-13.26283-2.17441l.312-2.22767c4.45426.62557,8.95134,1.36264,13.36608,2.19088Zm-93.67019-2.44792-.2977-2.22988c4.45318-.59427,8.98213-1.09407,13.46053-1.484l.19553,2.24086C577.35142,154.75947,572.85763,155.25488,568.43744,155.84475Zm67.05775-1.29069c-4.4312-.41742-8.94147-.73927-13.40674-.95512l.10983-2.24743c4.49822.218,9.04255.54212,13.50778.96279Zm-40.285-1.04519-.09444-2.24743c4.13458-.17247,8.34833-.26034,12.52574-.26144l1.01827.00161-.00659,2.24965-1.01168-.00165C603.49591,153.25074,599.313,153.33806,595.21021,153.50887Z"
        transform="translate(-279.01865 -151)"
        fill="#e6e6e6"
      />
      <path
        d="M608.34882,741.1215V618.10685a6.50752,6.50752,0,0,1,6.5-6.5h14.75976a6.50752,6.50752,0,0,1,6.5,6.5V741.1215a6.50753,6.50753,0,0,1-6.5,6.5H614.84882A6.50753,6.50753,0,0,1,608.34882,741.1215Z"
        transform="translate(-279.01865 -151)"
        fill="#2f2e41"
      />
      <path
        d="M579.15643,741.1215V618.10685a6.50753,6.50753,0,0,1,6.5-6.5H600.4162a6.50753,6.50753,0,0,1,6.5,6.5V741.1215a6.50753,6.50753,0,0,1-6.5,6.5H585.65643A6.50753,6.50753,0,0,1,579.15643,741.1215Z"
        transform="translate(-279.01865 -151)"
        fill="#2f2e41"
      />
      <rect
        x="292.73409"
        y="426.49441"
        width="71.75954"
        height="79.50559"
        rx="6"
        fill="#2f2e41"
      />
      <path
        d="M507.16757,384.22559s-30.15869,14.01025-55.67975,23.30175c-15.83716-35.751-38.65295-34.41308-38.65295-34.41308l-13.83246,9.52441,2.49438,14.28565-.68029,23.35644-3.62818,12.24512,5.20642.94092,2.9411.5332.44336-.40088a30.21881,30.21881,0,0,0-.881,8.9043l130.84131-20.40821S531.20425,401.00635,507.16757,384.22559Z"
        transform="translate(-279.01865 -151)"
        fill="#e6e6e6"
      />
      <rect
        x="513.82732"
        y="466.41045"
        width="26.75958"
        height="135.01423"
        rx="6"
        transform="translate(132.15633 1124.23521) rotate(-126.46649)"
        fill={props.colors?.main}
      />
      <rect
        x="648.84824"
        y="479.41045"
        width="26.75958"
        height="135.01423"
        rx="6"
        transform="translate(-458.12757 223.24181) rotate(-27.95414)"
        fill={props.colors?.main}
      />
      <path
        d="M673.65065,532.05277l-21.29277,14.11561c-3.25382,1.72675-7.1508.75369-8.70415-2.17338l-23.51528-44.31134c-1.55335-2.92707-.17484-6.69974,3.079-8.42649l14.49283-7.69111c3.25382-1.72674,7.1508-.75369,8.70415,2.17339l30.31521,37.88682C678.283,526.55335,676.90447,530.326,673.65065,532.05277Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <path
        d="M528.5505,519.07236l13.8395,18.379a6,6,0,0,0,8.481.26853l36.57635-34.33122a6,6,0,0,0,.26853-8.481L577.61483,484.146a6,6,0,0,0-8.481-.26853L528.819,510.59133A6,6,0,0,0,528.5505,519.07236Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <rect
        x="289.08267"
        y="331.05948"
        width="79.06239"
        height="154.47574"
        rx="6"
        fill="#ccc"
      />
      <circle
        cx="328.22203"
        cy="268.24226"
        r="53.51916"
        fill={props.colors?.main}
      />
      <path
        d="M613.47852,437.11133c-3.30664-.09278-7.42188-.208-10.58887-2.52246a8.13106,8.13106,0,0,1-3.2002-6.07324,5.46955,5.46955,0,0,1,1.86035-4.49219c1.6543-1.39844,4.07227-1.72852,6.67774-.96094l-2.69922-19.72656,1.98242-.27149,3.17188,23.19043-1.6543-.75879c-1.917-.88086-4.55078-1.32812-6.1875.05469a3.51377,3.51377,0,0,0-1.15234,2.89453,6.1458,6.1458,0,0,0,2.38086,4.52832c2.46386,1.80078,5.74511,2.03418,9.46582,2.1377Z"
        transform="translate(-279.01865 -151)"
        fill="#2f2e41"
      />
      <rect
        x="305.93936"
        y="254.03711"
        width="10.77148"
        height="2"
        fill="#2f2e41"
      />
      <rect
        x="339.93936"
        y="254.03711"
        width="10.77148"
        height="2"
        fill="#2f2e41"
      />
      <path
        d="M571.88494,377.41944c-8.67422-.98915-15.39221-9.30024-16.13008-17.733-.87783-10.03212,4.96458-19.56033,12.97992-25.18991,8.38219-5.88725,18.8256-8.34576,28.93006-8.887A79.50951,79.50951,0,0,1,652.013,343.5232c7.57144,6.28846,14.64266,14.29887,17.3227,23.97443,2.3275,8.40282.4335,17.92213-6.32474,23.80721a15.97618,15.97618,0,0,1-12.26,3.77473c-5.24389-.5445-10.08223-3.30177-14.27039-6.3469-8.14685-5.92341-14.835-14.17529-24.76049-17.27067-7.27771-2.26964-16.722-.27185-21.1694,6.30949a11.979,11.979,0,0,0-1.91259,5.01866,1.55341,1.55341,0,0,0,1.04766,1.84518,1.50931,1.50931,0,0,0,1.84517-1.04766c1.16758-8.28938,11.36015-11.38252,18.51255-9.48949,10.42855,2.76013,17.42914,12.06611,25.98534,17.97854,4.49851,3.10852,9.615,5.59408,15.13243,6.04a18.79087,18.79087,0,0,0,13.20329-4.05609c7.30959-5.77189,10.105-15.69938,8.48863-24.63744-1.87173-10.3504-8.83824-19.22131-16.482-26.08923a82.44679,82.44679,0,0,0-56.344-20.81437c-10.57357.24286-21.60609,2.42565-30.71518,8.01422-8.83577,5.42088-15.66506,14.49-16.55766,25.03193-.78565,9.27894,4.19268,18.98423,12.73843,23.04935a19.949,19.949,0,0,0,6.39214,1.80435c1.91494.21836,1.89934-2.78342,0-3Z"
        transform="translate(-279.01865 -151)"
        fill="#2f2e41"
      />
      <path
        d="M405.23825,432.186l6.34936-2.041c.6803-1.30371-.56463-.46729.02948-1.73486,16.06379-34.27051,1.21772-55.2959,1.21772-55.2959L401.35,381.022c-.02825-.06494-.05139-.13232-.08007-.19775.00006,0-2.04084-4.53516-5.21546-1.13379,0,0,9.97748,24.26367-1.13385,54.42285l12.92542,5.896,4.98871-5.896.1134-.56689-8.92816-.81153Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <path
        d="M586.30724,559.51239c-51.02133-11.33807-98.52783,12.13171-98.52783,12.13171l-.12927-.11566L468.73144,554.637,394.80724,434l18.02753.11337c50.11426-29.93249,120.637-25.8508,120.637-25.8508C563.85787,442.73029,586.30724,559.51239,586.30724,559.51239Z"
        transform="translate(-279.01865 -151)"
        fill="#3f3d56"
      />
      <path
        d="M487.65017,571.5285,468.73147,554.637,394.80724,434l18.02753.11337S484.68639,529.01074,487.65017,571.5285Z"
        transform="translate(-279.01865 -151)"
        opacity="0.1"
        style={{ isolation: "isolate" }}
      />
      <ellipse
        cx="490.50058"
        cy="459.62401"
        rx="29.25223"
        ry="18.59442"
        transform="translate(-392.23489 13.03807) rotate(-17.05185)"
        fill={props.colors?.main}
      />
      <path
        d="M338.0302,375.50781c-4.07382,15.05929-18.02755,24.38587-18.02755,24.38587s-7.34878-15.08934-3.275-30.14863,18.02757-24.38587,18.02757-24.38587S342.104,360.44855,338.0302,375.50781Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <path
        d="M300.96981,375.50781c4.07383,15.05929,18.02755,24.38587,18.02755,24.38587s7.34879-15.08934,3.275-30.14863-18.02754-24.38587-18.02754-24.38587S296.896,360.44855,300.96981,375.50781Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <path
        d="M306.956,372.27141c11.17862,10.88194,12.544,27.61,12.544,27.61s-16.75872-.915-27.93735-11.797-12.544-27.61-12.544-27.61S295.77738,361.38948,306.956,372.27141Z"
        transform="translate(-279.01865 -151)"
        fill="#3f3d56"
      />
      <path
        d="M332.044,372.27141c-11.17862,10.88194-12.544,27.61-12.544,27.61s16.75874-.915,27.93735-11.797,12.544-27.61,12.544-27.61S343.22263,361.38948,332.044,372.27141Z"
        transform="translate(-279.01865 -151)"
        fill="#3f3d56"
      />
      <path
        d="M899.0302,545.50781c-4.07382,15.05929-18.02755,24.38587-18.02755,24.38587s-7.34878-15.08934-3.275-30.14863,18.02757-24.38587,18.02757-24.38587S903.104,530.44855,899.0302,545.50781Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <path
        d="M861.96981,545.50781c4.07383,15.05929,18.02755,24.38587,18.02755,24.38587s7.34879-15.08934,3.275-30.14863-18.02754-24.38587-18.02754-24.38587S857.896,530.44855,861.96981,545.50781Z"
        transform="translate(-279.01865 -151)"
        fill="#ccc"
      />
      <path
        d="M867.956,542.27141c11.17862,10.88194,12.544,27.61,12.544,27.61s-16.75872-.915-27.93735-11.797-12.544-27.61-12.544-27.61S856.77738,531.38948,867.956,542.27141Z"
        transform="translate(-279.01865 -151)"
        fill="#3f3d56"
      />
      <path
        d="M893.044,542.27141c-11.17862,10.88194-12.544,27.61-12.544,27.61s16.75874-.915,27.93735-11.797,12.544-27.61,12.544-27.61S904.22263,531.38948,893.044,542.27141Z"
        transform="translate(-279.01865 -151)"
        fill="#3f3d56"
      />
      <rect x="213.9628" y="596" width="232" height="2" fill="#3f3d56" />
    </svg>
  );
}
