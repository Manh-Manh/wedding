import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-mini-game',
  imports: [CommonModule],
  templateUrl: './mini-game.component.html',
})
export class MiniGameComponent {
  private configService = inject(ConfigService);
  gameConfig = computed(() => this.configService.config().miniGame);

  selectedAnswers = signal<{ [key: number]: string }>({});
  isSubmitted = signal(false);
  
  score = computed(() => {
    if (!this.isSubmitted()) return 0;
    return this.gameConfig().questions.reduce((total, question, index) => {
      return total + (this.selectedAnswers()[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  });

  resultMessage = computed(() => {
    if (!this.isSubmitted()) return '';
    const currentScore = this.score();
    const results = [...this.gameConfig().results].sort((a, b) => b.minScore - a.minScore);
    return results.find(r => currentScore >= r.minScore)?.message || "Thanks for playing!";
  });

  get totalQuestions(): number {
    return this.gameConfig().questions.length;
  }

  selectAnswer(questionIndex: number, answer: string) {
    if (this.isSubmitted()) return;
    this.selectedAnswers.update(current => ({
      ...current,
      [questionIndex]: answer
    }));
  }

  submitAnswers() {
    this.isSubmitted.set(true);
  }

  playAgain() {
    this.selectedAnswers.set({});
    this.isSubmitted.set(false);
  }

  isAnswerCorrect(questionIndex: number, answer: string): boolean {
    return this.gameConfig().questions[questionIndex].correctAnswer === answer;
  }

  isAnswerSelected(questionIndex: number, answer: string): boolean {
    return this.selectedAnswers()[questionIndex] === answer;
  }
}