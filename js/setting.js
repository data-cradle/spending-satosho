/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'satosho_2015_ippan';
OpenSpending.year = '2015';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '1': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#935B3B' }, //民生費
  '2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' }, //総務費
  '3': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#4E6D00' }, //土木費
  '4': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#D33673' }, //教育費
  '5': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#2A3A03' }, //衛生費
  '6': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#EC2406' }, //公債費
  '7': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#938626' }, //消防費
  '8': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#C75746' }, //農林水産費
  '9': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#D33673' } //その他
};
