import { MatchReader } from "./MatchReader";
import { CsvFileReader } from './CsvFileReader';
import { Summary } from "./Summery";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport())

summary.buildAndPrintReport(matchReader.matches)