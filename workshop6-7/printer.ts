class Printer{
    print(){
        console.log("I am a printer")
    }
}

class ColorPrinter extends Printer{
    print(){
        console.log( "I am a color printer")
    }
}
const printer = new Printer();
printer.print();
const colorprinter = new ColorPrinter();
colorprinter.print();