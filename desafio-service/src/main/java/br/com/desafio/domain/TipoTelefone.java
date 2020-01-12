package br.com.desafio.domain;

public enum TipoTelefone {

    RESIDENCIAL("RESIDENCIAL"),
    COMERCIAL("COMERCIAL"),
    CELULAR("CELULAR");

    private String tipo;

    TipoTelefone(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}
