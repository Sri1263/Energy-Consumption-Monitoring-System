#include <iostream>
#include <string>
using namespace std;
string shiftCharacters(const string &input, int shift) {
    string result = input;
    for (char &c : result) {
        if (isalpha(c)) {
            char base = (isupper(c)) ? 'A' : 'a';
            c = (c - base + shift) % 26 + base;
        }
    }
    
    return result;
}

int main() {
    string input;
    int shift;
    cin >> input;
    cin >> shift;
    
    string shifted = shiftCharacters(input, shift);
    
    // Reverse the 'shifted' string
    string reversedShifted(shifted.rbegin(), shifted.rend());
    
    cout << reversedShifted << ":d92a13exjc" << endl;
    
    return 0;
}