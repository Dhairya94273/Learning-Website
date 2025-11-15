#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <dos.h>

#define WIDTH 40
#define HEIGHT 20

void drawBorder();
void gotoxy(int x,int y);

int main() {
    int basketX = WIDTH / 2, basketY = HEIGHT - 1;
    int candyX, candyY;
    int score = 0, lives = 3;
    char ch;

    randomize(); // Turbo C random seed

    candyX = rand() % WIDTH;
    candyY = 0;

    while(lives > 0) {
        clrscr();
        drawBorder();

        // Print score & lives
        gotoxy(WIDTH + 5, 5); printf("Score: %d", score);
        gotoxy(WIDTH + 5, 6); printf("Lives: %d", lives);

        // Draw candy
        gotoxy(candyX, candyY);
        printf("*");

        // Draw basket
        gotoxy(basketX, basketY);
        printf("V");

        delay(150);

        // Move candy down
        candyY++;

        // If candy reaches bottom
        if(candyY == basketY) {
            if(candyX == basketX) {
                score++;
            } else {
                lives--;
            }
            // Reset candy
            candyX = rand() % WIDTH;
            candyY = 0;
        }

        // Basket movement
        if(kbhit()) {
            ch = getch();
            if(ch == 75 && basketX > 1) basketX--; // left arrow
            else if(ch == 77 && basketX < WIDTH-1) basketX++; // right arrow
        }
    }

    clrscr();
    gotoxy(WIDTH/2-5, HEIGHT/2);
    printf("GAME OVER!");
    gotoxy(WIDTH/2-5, HEIGHT/2+1);
    printf("Final Score: %d", score);

    getch();
    return 0;
}

void drawBorder() {
    int i;
    for(i=0;i<=WIDTH;i++) {
        gotoxy(i,0); printf("-");
        gotoxy(i,HEIGHT); printf("-");
    }
    for(i=0;i<=HEIGHT;i++) {
        gotoxy(0,i); printf("|");
        gotoxy(WIDTH,i); printf("|");
    }
}

void gotoxy(int x,int y) {
    union REGS r;
    r.h.ah = 2;
    r.h.dl = x;
    r.h.dh = y;
    r.h.bh = 0;
    int86(0x10, &r, &r);
}
