import { Component, ChangeDetectionStrategy, inject, signal, computed, untracked  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../services/config.service';
import { MiniGame, MiniGameQuestion } from '../../../models/config.model';

@Component({
  selector: 'app-mini-game',
  imports: [CommonModule],
  templateUrl: './mini-game.component.html',
})


export class MiniGameComponent {
  private configService = inject(ConfigService);
  
  private readonly EMPTY_GAME: MiniGame = {
    title: '',
    intro: '',
    prizeNotice: '',
    questions: [],
    results: []
  };

  gameConfig = computed(() => {
    const config = this.configService.config();
    return (config && config.miniGame) ? config.miniGame : this.EMPTY_GAME;
  });

  // Cache để tránh race condition khi click nhanh
  private _selectedAnswersCache: { [key: number]: string } = {};
  selectedAnswers = signal<{ [key: number]: string }>({});
  isSubmitted = signal(false);
  
  // score = computed(() => {
  //   if (!this.isSubmitted()) return 0;
  //   return this.gameConfig().questions.reduce((total, question, index) => {
  //     return total + (this._selectedAnswersCache[index] === question.correctAnswer ? 1 : 0);
  //   }, 0);
  // });


  score = computed(() => {
  if (!this.isSubmitted()) return 0;
  
  let correctCount = 0;
  this.gameConfig().questions.forEach((question, index) => {
    const userAnswer = this._selectedAnswersCache[index];
    const correctAnswer = question.correctAnswer;
    
    console.log(`Question ${index + 1}:`);
    console.log(`  User answered: "${userAnswer}"`);
    console.log(`  Correct answer: "${correctAnswer}"`);
    console.log(`  Match: ${userAnswer === correctAnswer}`);
    
    if (userAnswer === correctAnswer) {
      correctCount++;
    }
  });
  
  console.log(`Total correct: ${correctCount}`);
  return correctCount;
});

  resultMessage = computed(() => {
    if (!this.isSubmitted()) return '';
    const currentScore = this.score();
    const results = [...this.gameConfig().results].sort((a, b) => b.minScore - a.minScore);
    return results.find(r => currentScore >= r.minScore)?.message || "Cảm ơn bạn đã chơi!";
  });

  get totalQuestions(): number {
    return this.gameConfig().questions.length;
  }

  selectAnswer(questionIndex: number, answer: string) {
    if (this.isSubmitted()) return;
    
    console.log(`🎯 Q${questionIndex + 1}: Selecting "${answer}"`);
    
    // Update cache
    this._selectedAnswersCache[questionIndex] = answer;
    
    // Update signal để trigger re-render
    this.selectedAnswers.set({ ...this._selectedAnswersCache });
    
    console.log('  Selected answers:', { ...this._selectedAnswersCache });
  }

  submitAnswers() {
    const totalQuestions = this.gameConfig().questions.length;
    const answeredCount = Object.keys(this._selectedAnswersCache).length;
    
    if (answeredCount < totalQuestions) {
      alert(`Vui lòng trả lời tất cả câu hỏi! (${answeredCount}/${totalQuestions})`);
      return;
    }
    
    console.log('✅ Submitting answers:', this._selectedAnswersCache);
    console.log('🎯 Final score:', this.score());
    
    this.isSubmitted.set(true);
  }

  playAgain() {
    console.log('🔄 Resetting game...');
    this._selectedAnswersCache = {};
    this.selectedAnswers.set({});
    this.isSubmitted.set(false);
  }

  isAnswerCorrect(question: MiniGameQuestion, answer: string): boolean {
    return question.correctAnswer === answer;
  }

  isAnswerSelected(questionIndex: number, answer: string): boolean {
    return this._selectedAnswersCache[questionIndex] === answer;
  }
}
