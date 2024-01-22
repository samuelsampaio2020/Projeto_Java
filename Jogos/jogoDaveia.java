package atividade;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class jogoDaveia{
    static String[][] listaTeste = {{"_","_","_"},{"_","_","_"},{"_","_","_"}};
    public static void main(String[]args){
        
        int jogar = 1;
        Scanner r = new Scanner(System.in);
        while(jogar == 1){
            try{
                System.out.print("0-Sair\n1-Jogar:");
                int alt = r.nextInt();
                switch(alt){
                    case 1:
                        jogo();
                        break;
                    case 0:
                        System.out.println("Saindo...");
                        jogar -=1;
                        break;
                    
            }
            }catch(NoSuchElementException err){
                System.out.println(err);
                
            }
        }
        r.close();
    }

    public static void jogo(){
        Scanner op1 = new Scanner(System.in);
        Scanner op2 = new Scanner(System.in);
        int jogar = 1;
        int N_jogador = 1;
        int jogadas = 1;
        while (jogar == 1){
            if(N_jogador == 1){
                try{
                    exibir();
                    System.out.println("jogador: X \nrodadas:"+jogadas);
                    int confirme = 1;
                    while(confirme == 1){
                        System.out.print("Linha:");
                        int Linha = op1.nextInt();
                        System.out.print("Coluna:");
                        int Coluna = op1.nextInt();
                        if(listaTeste[Linha-1][Coluna-1] == "_"){
                            listaTeste[Linha-1][Coluna-1] = "X";
                            confirme -=1;
                        }else{
                            System.out.println("O local já foi Ocupado");
                        }
                    }
                    
                    N_jogador += 1;
                    jogadas += 1;
                    verificando_X();
                    if(verificando_X() == 1){
                        System.out.println("Jogador X Ganhou\n Depois de "+jogadas);
                        limpando();
                        op1.close();
                        break;
                    }else if(jogadas == 9){
                        System.out.println("Sem jogadas Disponiveis\n Portando Empate");
                        limpando();
                        break;
                    }
                }catch(ArrayIndexOutOfBoundsException err){
                    System.out.println(err+"\nQuer dizer o tamanho maximo foi ultrapassado");
                }
                    
            }
            else if(N_jogador == 2){
                try{
                    exibir();
                    System.out.println("jogador: O \nrodadas:"+jogadas);
                    int confirme =1;
                    while (confirme == 1) {
                        System.out.print("Linha:");
                        int Linha2 = op2.nextInt();
                        System.out.print("Coluna:");
                        int Coluna2 = op2.nextInt();
                        if(listaTeste[Linha2-1][Coluna2-1] == "_"){
                            listaTeste[Linha2-1][Coluna2-1] = "O";
                            confirme -=1;
                        }else{
                            System.out.println("O local Já Foi Ocupado");
                        }
                        
                    }
                    N_jogador -= 1;
                    jogadas += 1;
                    verificando_O();
                    if(verificando_O() == 1){
                        System.out.println("Jogador O Ganhou\n Depois de "+jogadas);
                        limpando();
                        break;
                    }else if(jogadas == 9){
                        System.out.println("Sem jogadas Disponiveis\n Portando Empate");
                        limpando();
                        break;
                    }
                }
                catch(ArrayIndexOutOfBoundsException err){
                    System.out.println(err+"\nQuer dizer o tamanho maximo foi ultrapassado");
                }
                }
            }
        op1.close();
        op2.close();
    }
        
    public static int verificando_X(){
        if(listaTeste[0][0] == "X" && listaTeste[1][1] == "X" && listaTeste[2][2] == "X"){
            return 1;}
        else if(listaTeste[0][2] == "X" && listaTeste[1][1] == "X" && listaTeste[2][0] == "X"){
            return 1;}

        else if(listaTeste[0][0] == "X" && listaTeste[0][1] == "X" && listaTeste[0][2] == "X"){
            return 1;}
        else if(listaTeste[1][0] == "X" && listaTeste[1][1] == "X" && listaTeste[1][2] == "X"){
            return 1;}
        else if(listaTeste[2][0] == "X" && listaTeste[2][1] == "X" && listaTeste[2][2] == "X"){
            return 1;}

        else if(listaTeste[0][0] == "X" && listaTeste[1][0] == "X" && listaTeste[2][0] == "X"){
            return 1;}
        else if(listaTeste[0][1] == "X" && listaTeste[1][1] == "X" && listaTeste[2][1] == "X"){
            return 1;}
        else if(listaTeste[0][2] == "X" && listaTeste[1][2] == "X" && listaTeste[2][2] == "X"){
            return 1;}
    return 0;
    }

    public static int verificando_O(){
    //Verificando a Diagonal---------------------------------------------------------------
    if(listaTeste[0][0] == "O" && listaTeste[1][1] == "O" && listaTeste[2][2] == "O"){
        return 1;}
    else if(listaTeste[0][2] == "O" && listaTeste[1][1] == "O" && listaTeste[2][0] == "O"){
        return 1;}
    //Verificando a Diagonal---------------------------------------------------------------

    //Verificando a Horizontal ---------------------------------------------------------------
    else if(listaTeste[0][0] == "O" && listaTeste[0][1] == "O" && listaTeste[0][2] == "O"){
        return 1;}
    else if(listaTeste[1][0] == "O" && listaTeste[1][1] == "O" && listaTeste[1][2] == "O"){
        return 1;}
    else if(listaTeste[2][0] == "O" && listaTeste[2][1] == "O" && listaTeste[2][2] == "O"){
        return 1;}
    //Verificando a Horizontal ---------------------------------------------------------------

    //Verificando a Vertical ---------------------------------------------------------------
    else if(listaTeste[0][0] == "O" && listaTeste[1][0] == "O" && listaTeste[2][0] == "O"){
        return 1;}
    else if(listaTeste[0][1] == "O" && listaTeste[1][1] == "O" && listaTeste[2][1] == "O"){
        return 1;}
    else if(listaTeste[0][2] == "O" && listaTeste[1][2] == "O" && listaTeste[2][2] == "O"){
        return 1;}
    //Verificando a Vertical ---------------------------------------------------------------    
return 0;
}
    
    public static void exibir(){
        for(int Linha=0;Linha<listaTeste.length;Linha++){
            for(int Coluna=0;Coluna<listaTeste.length;Coluna++){
                System.out.print(listaTeste[Linha][Coluna]+" ");
            }
            System.out.println();
        }
    }

    public static void limpando(){
        for(int Linha = 0;Linha <listaTeste.length;Linha++){
            for(int Coluna = 0;Coluna < listaTeste.length;Coluna++){
                listaTeste[Linha][Coluna] = "_";
            }
        }
    }

}

