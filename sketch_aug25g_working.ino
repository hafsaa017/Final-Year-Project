int xpin = 36;                
 int ypin = 39;                
 int zpin = 34; 
 int xvalue;
 int yvalue;
 int zvalue;

void setup()
{
   Serial.begin(9600);          // initialize the serial communications:
}


void loop()
{
  xvalue = analogRead(xpin);                              //reads values from x-pin & measures acceleration in X direction 
  int x = map(xvalue, 1520, 2367, -300, 300);               //maps the extreme ends analog values from -100 to 100 for our understanding
//; you need to replace the 267 & 400 value with your values from calibration
  float xg = (float)x/(-300.00);                          //converts the mapped value into acceleration in terms of "g"
  Serial.print(xg);                                       //prints value of acceleration in X direction
 // Serial.print("g   ");                                   //prints "g"
   
  yvalue = analogRead(ypin);
  int y = map(yvalue, 1506, 2352, -300, 300);
  float yg = (float)y/(-300.00);
  Serial.print("\t");
  Serial.print(yg);
// Serial.print("g   "); 
 
  zvalue = analogRead(zpin);
  int z = map(zvalue, 1561, 2379, -300, 300);
  float zg = (float)z/(300.00);
  Serial.print("\t"); 
  Serial.println(zg);
 // Serial.print("g   ");
  delay(100);
}
