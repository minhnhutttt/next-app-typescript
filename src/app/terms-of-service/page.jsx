import PageContainer from "../components/common/pageContainer";
import PageTitle from "../components/common/pageTitle";
import TextBlock from "../components/common/textBlock";

export default function TermsOfService() {
  return (
    <PageContainer>
      <PageTitle>利用規約</PageTitle>
      <div className="px-5">
        <div className="mx-auto pb-16 mt-10 w-full max-w-[1000px] space-y-9 md:pb-20 md:mt-28">
            <div className="md:mb-14">
                <TextBlock>
                    この利用規約（以下，「本規約」といいます。）は，株式会社ジャパントータルコミュニケーションズ（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
                </TextBlock>
            </div>
            <TextBlock title="第1条（適用範囲）">
                <ol className="list-decimal ml-5">
                    <li>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                    <li>当社は，本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                    <li>本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第2条（利用登録）">
                <ol className="list-decimal ml-5">
                    <li>本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
                    <li>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                        <ul className="list-[lower-alpha] ml-5">
                            <li>利用登録の申請に際して虚偽の又は不正確な事項を届け出た場合</li>
                            <li>本規約に違反したことがある者からの申請である場合</li>
                            <li>反社会的勢力に該当する場合又は反社会的勢力との関係を有すると当社が合理的に判断する場合</li>
                            <li>利用登録の申請に際して虚偽の又は不正確な事項を届け出た場合</li>
                        </ul>
                    </li>
                    <li>ユーザーは、利用登録した情報に変更が生じた場合、当社が別途定める方法に従った変更届出により、登録情報を変更しなければなりません。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第3条（ユーザーID及びパスワードの管理）">
                <ol className="list-decimal ml-5">
                    <li>ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
                    <li>ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当社に故意又は重大な過失がある場合を除き、当社は一切の責任を負わないものとします。
                    </li>
                </ol>
            </TextBlock>
            <TextBlock title="第4条（利用環境の準備）　">
                <ol className="list-decimal ml-5">
                    <li>ユーザーは、本サービスを利用するため、コンピュータ機器、ソフトウェア、通信機器及びインターネット接続契約等を自らの負担で準備するものとします。</li>
                    <li>当社は、前項の利用環境の準備につきいかなる責任も負いません。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第4条（利用環境の準備）　">
                <ol className="list-decimal ml-5">
                    <li>ユーザーは、本サービスを利用して当社よりサービスを購入することができます。</li>
                    <li>ユーザーは、サービスの購入を希望する場合、当社が指定する方法に従ってサービスの購入を申し込むものとします。ユーザーは、申込内容につき真実かつ正確なデータを入力し、送信するものとします。</li>
                    <li>前項の申込に対して、当社が承諾する場合、ユーザーが登録した電子メールアドレス宛に注文を受け付けた旨を電子メールで送信します。当該電子メールを送信した時をもって商品の売買契約が成立するものとします。</li>
                    <li>前項の定めにかかわらず，ユーザーの本サービス利用に関して不正行為若しくは不適切な行為があった場合，又はユーザー指定のクレジットカード会社等から与信不履行等の旨の連絡があった場合，当社は，売買契約を解除又は解約，履行停止その他適切な措置をとることができるものとします。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第6条（注文後のキャンセル）">
                商品の性質上、キャンセルはできません。
            </TextBlock>
            <TextBlock title="第7条（商品の引渡期日・商品の引取権）">
                当社は、第5条によりユーザーと当社との売買契約が締結された日から14日以内に、ユーザーが購入したサービスを提供いたします。
            </TextBlock>
            <TextBlock title="第8条（代金利用料金及び支払方法）">
                ユーザーは、購入したサービスについて、本サービスの各ページに表示する代金を、当社が指定する方法にて支払うものとします。
            </TextBlock>
            <TextBlock title="第9条（返品・交換・返金）">
                ユーザーが購入した商品については、ユーザー都合の商品の返品又は交換は承れません。商品の返品については「特定商取引に関する法律に基づく表示」をご確認ください。
            </TextBlock>
            <TextBlock title="第10条（禁止事項）">
                <ol className="list-decimal ml-5">
                    <li>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</li>
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為又はこれに関連する行為</li>
                    <li>本サービスの内容等，本サービスに含まれる著作権，商標権その他のほか知的財産権を侵害する行為</li>
                    <li>当社，他ほかのユーザー，または又はその他第三者のサーバーまたは又はネットワークの機能を破壊したり，妨害したりする行為</li>
                    <li>本サービスによって得られた情報を商業的に利用する行為</li>
                    <li>当社のサービスの運営を妨害する行為又は妨害するおそれのある行為</li>
                    <li>不正アクセスをし，または又はこれを試みる行為</li>
                    <li>他のユーザーに関する個人情報等を収集または又は蓄積する行為</li>
                    <li>不正な目的を持って本サービスを利用する行為</li>
                    <li>本サービスの他のユーザーまたは又はその他の第三者に不利益，損害，不快感を与える行為</li>
                    <li>他のユーザーにな成りすます行為</li>
                    <li>当社が許諾しない本サービス上での宣伝，広告，勧誘，または又は営業行為</li>
                    <li>面識のない異性との出会いを目的とした行為</li>
                    <li>当社のサービスに関連して，反社会的勢力に対して直接または又は間接に利益を供与する行為</li>
                    <li>その他，当社が不適切と合理的に判断する行為</li>
                    <li>ユーザーが前項に違反した場合、当社はユーザーの本サービスの利用を制限することができるものとします。また、ユーザーが前項に違反したことにより当社に損害を与えた場合、当社は当該ユーザーに対し、被った損害の賠償を請求できるものとします。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第11条（保証の否認及び免責事項）">
                <ol className="list-decimal ml-5">
                    <li>当社は，本サービスに事実上または法律上の不具合瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                    <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について，、当社の故意又は重過失による場合を除き、一切の責任を負いません。</li>
                    <li>前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または又は不法行為によりユーザーに損害が生じた場合損害のうち，当社の故意又は重過失による場合を除き，特別な事情から生じた損害（当社または又はユーザーが損害発生につき予見し，または又は予見し得た場合を含みます。）については一切の責任を負いません。</li>
                    <li>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等については一切責任を負いません。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第12条（本サービスの停止・中断等）">
                <ol className="list-decimal ml-5">
                    <li>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        <ul className="list-[lower-alpha] ml-5">
                            <li>本サービスに係るかかるコンピュータシステム又はウェブサイトの保守点検または又は更新を行う場合</li>
                            <li>地震，落雷，火災，停電または又は天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                            <li>コンピュータまたは又は通信回線等が事故等により停止した場合</li>
                            <li>その他，当社が本サービスの提供が困難と合理的に判断した場合</li>
                        </ul>
                    </li>
                    <li>当社は、前項の理由に基づく本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、当社の故意又は重過失による場合を除き、一切の責任を負わないものとします。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第13条（本サービス内容の変更・追加・廃止等）">
                当社は，当社のホームページへの掲載その他ユーザーへの事前の告知当社が適切であると判断する方法によってユーザーに対して通知又は公表することによりをもって、，本サービスの全部又は一部内容を変更、，追加または又は廃止することができるあり、ユーザーはこれを承諾するものとします。
            </TextBlock>
            <TextBlock title="第14条（本利用規約の変更）">
                <ol className="list-decimal ml-5">
                    <li>当社は、以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                        <ul className="list-[lower-alpha] ml-5">
                            <li>本規約の変更がユーザーの一般の利益に適合するとき。</li>
                            <li>本規約の変更が本サービス利用規約契約の目的に反せず、，かつ、，変更の必要性、および変更後の内容の相当性、変更の内容その他の変更に係る事情に照らして合理的なものであるとき。</li>
                        </ul>
                    </li>
                    <li>当社は、ユーザーに対し、本規約の変更にあたり&quot;事前に&quot;本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を当社のホームページへの掲載その他当社が適切と判断した方法にて公表又は通知します。</li>
                </ol>
            </TextBlock>
            <TextBlock title="第15条（個人情報の取扱い）">
                当社は、本サービスの利用によって取得する個人情報については、当社の「プライバシーポリシー」に従い適切に取り扱うものとします。
            </TextBlock>
            <TextBlock title="第16条（通知または連絡）">
                ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから,当社が別途定める方法式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらの通知又は連絡は、発信時にユーザーへ到達したものとみなします。
            </TextBlock>
            <TextBlock title="第17条（権利義務の譲渡禁止）　">
            ユーザーは、当社の書面による承諾がない限り、本規約及び売買契約に基づいて発生する一切の権利又は義務について、第三者に譲渡、移転、又は担保提供してはなりません。
            </TextBlock>
            <TextBlock title="第18条（準拠法・裁判管轄）">
            <ol className="list-decimal ml-5">
                    <li>本規約の解釈にあたっては、日本法を準拠法とします。
                    </li>
                    <li>本サービス又は売買契約に関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。以上</li>
                </ol>
            </TextBlock>
        </div>
      </div>
    </PageContainer>
  );
}
