// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Jordan Hudgens";

// Array
var ages : number[] = [33, 28, 11];

// Tuple
let player : [number, string];
player = [3, 'Corerra'];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
enum color {red, green, blue}
let job : ApprovalStatus = ApprovalStatus.Pending;
let job : ApprovalStatus = ApprovalStatus.Approved;
let job : ApprovalStatus = ApprovalStatus.Rejected;

// Any
var apiData : any[] = [123, 'Jordan', false];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}
